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

export const removeBook = (id) => async (dispatch) => {
  await apiCalls.removeBookFromApi(id);
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};
// eslint-disable-next-line
export const fetchAllBooks = () => async (dispatch) => {
  const apiData = await apiCalls.getAllBooksFromApi();
  const payload = Object.entries(apiData).map(([key, value]) => {
    const [books] = value;
    return {
      item_id: key,
      ...books,
    };
  });
  dispatch({
    type: FETCH_BOOKS,
    payload,
  });
};
// eslint-disable-next-line
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    case FETCH_BOOKS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};

export default booksReducer;
