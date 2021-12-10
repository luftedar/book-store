import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import booksReducer from './books/books';

const reducer = combineReducers({
  booksReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(),
);

export default store;
