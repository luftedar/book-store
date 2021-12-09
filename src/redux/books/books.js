import * as apiCalls from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookStore/books/FETCH_BOOKS';
const initialState = [];

export const addBook = (payload) => async (dispatch) => {
  await apiCalls.addBookToApi(payload);
  dispatch({
    type: ADD_BOOK,
    payload,
  });
};

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});
// eslint-disable-next-line
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
