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
    if (titleValue.value.length !== 0 && titleValue.value.split(' ')[0].length !== 0
    && categoryValue.value.length !== 0 && categoryValue.value.split(' ')[0].length !== 0
    ) {
      const newBook = {
        item_id: uuidv4(),
        title: titleValue.value,
        category: categoryValue.value,
      };
      titleValue.value = '';
      categoryValue.value = '';
      dispatch(addBook(newBook));
    }
  };
  const books = useSelector((state) => state.booksReducer);
  useEffect(() => { dispatch(fetchAllBooks()); }, [dispatch]);
  return (
    <div className="progress">
      <ul>
        {books.map((book) => (
          <Book
            key={book.item_id}
            book={book}
          />
        ))}
      </ul>
      <div className="form-area mont">
        <h3>ADD NEW BOOK</h3>
        <form className="submit-area" action="submit" onSubmit={(e) => { submitBookToStore(e); }}>
          <input type="text" placeholder="Book Title" id="b-title" />
          <input type="text" placeholder="Book Category" id="b-category" />
          <button type="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default Progress;
