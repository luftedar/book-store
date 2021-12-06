import React from 'react';

const Book = function () {
  return (
    <div className="book-item">
      <div className="book-desc">
        <h5>Genre</h5>
        <h2>Title</h2>
        <p>Author</p>
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
  );
};

export default Book;
