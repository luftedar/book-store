import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

/* eslint-disable react/prop-types */
const Book = function (props) {
  const { books } = props;
  const dispatch = useDispatch();
  console.log(books);
  return (
    <li key={books.id}>
      <span>
        {` ${books.title} `}
      </span>
      <span>
        {`by ${books.author}`}
      </span>
      <button type="button" onClick={() => dispatch(removeBook(books.id))}>
        Remove Book
      </button>
    </li>
  );
};

export default Book;
