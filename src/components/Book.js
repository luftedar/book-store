import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <li className="book-item" key={book.item_id}>
      <div className="book-description">
        <h3 className="mont">
          { book.category}
        </h3>
        <h2>
          {book.title}
        </h2>
        <p>
          Suzanne Collins
        </p>
        <div className="book-button-container">
          <button className="book-button" type="button">Comments</button>
          <button className="book-button" type="button" onClick={() => dispatch(removeBook(book.item_id))}>
            Remove Book
          </button>
          <button className="book-button" type="button">Edit</button>
        </div>
      </div>
      <div className="book-item-right">
        <div className="progress-area">
          <div className="circle-wrap">
            <div className="circle">
              <div className="mask full">
                <div className="fill" />
              </div>
              <div className="mask half">
                <div className="fill" />
              </div>
              <div className="inside-circle" />
            </div>
          </div>
          <div className="percentage">
            <div className="completed-perc mont">75%</div>
            <div className="completed-span mont">Completed</div>
          </div>
        </div>
        <div className="summary">
          <div className="summary-header">
            <h3>CURRENT CHAPTER</h3>
            <h5>Chapter 17</h5>
          </div>
          <button type="button">Update Progress</button>
        </div>
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
