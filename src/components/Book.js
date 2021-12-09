import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li key={book.item_id}>
      <h2>
        {`Title: ${book.title} `}
      </h2>
      <h3>
        {`Category: ${book.category}`}
      </h3>
      <button type="button" onClick={() => dispatch(removeBook(book.item_id))}>
        Remove Book
      </button>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
