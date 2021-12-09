import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { addBook, fetchAllBooks } from '../redux/books/books';
import Book from './Book';

function Progress() {
  const dispatch = useDispatch();
  const submitBookToStore = (e) => {
    e.preventDefault();
    const titleValue = e.target.querySelector('#b-title');
    const categoryValue = e.target.querySelector('#b-category');
    const newBook = {
      id: uuidv4(),
      title: titleValue.value,
      category: categoryValue.value,
    };
    dispatch(addBook(newBook));
  };
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => { dispatch(fetchAllBooks()); }, [dispatch]);
  return (
    <div className="progress">
      <div className="book-item">
        <div className="book-desc">
          <ul>
            {books.map((book) => (
              <Book
                key={book.id}
                book={book}
              />
            ))}
          </ul>
          <div>
            <a href="http://localhost:3000/">Comments</a>
            <a href="http://localhost:3000/">Remove</a>
            <a href="http://localhost:3000/">Edit</a>
          </div>
        </div>
        <div className="progress" />
        <div className="summary">
          <h3>CURRENT CHAPTER</h3>
          <h5>Chapter 17</h5>
          <button type="button">Update Progress</button>
        </div>
      </div>
      <div className="form-area">
        <h3>ADD NEW BOOK</h3>
        <form action="submit" onSubmit={(e) => { submitBookToStore(e); }}>
          <input type="text" placeholder="Book Title" id="b-title" />
          <input type="text" placeholder="Book Category" id="b-category" />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default Progress;
