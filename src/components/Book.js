import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

/* eslint-disable react/prop-types */
const Book = function (props) {
  const { books } = props;
  const dispatch = useDispatch();
  return (
    <li key={books.id}>
      <h2>
        {`Title: ${books.title} `}
      </h2>
      <h3>
        {`Author: ${books.author}`}
      </h3>
      <button type="button" onClick={() => dispatch(removeBook(books.id))}>
        Remove Book
      </button>
    </li>
  );
};

export default Book;
