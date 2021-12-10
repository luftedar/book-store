import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li className="book-item" key={book.item_id}>
      <div className="book-description">
        <h2>
          {`Title: ${book.title}`}
        </h2>
        <h3>
          {`Category: ${book.category}`}
        </h3>
        <div className="book-button-container">
          <button className="book-button" type="button">Comments</button>
          <button className="book-button" type="button" onClick={() => dispatch(removeBook(book.item_id))}>
            Remove Book
          </button>
          <button className="book-button" type="button">Edit</button>
        </div>
      </div>
      <div className="summary">
        <h3>CURRENT CHAPTER</h3>
        <h5>Chapter 17</h5>
        <button type="button">Update Progress</button>
      </div>
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
