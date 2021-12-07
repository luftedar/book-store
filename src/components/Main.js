import Book from './Book';

const Progress = function () {
  return (
    <div className="progress">
      <div className="book-item">
        <div className="book-desc">
          <ul>
            <Book author="deneme" title="deneme" />
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
        <form>
          <input type="text" placeholder="Book title" />
          <select name="Category">
            <option>Category</option>
            <option value="first">First</option>
            <option value="second">Second</option>
          </select>
          <button type="button">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
};

export default Progress;
