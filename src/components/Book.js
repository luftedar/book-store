import React from 'react';

function Book() {
  return (
    <div className="book-item">
      <h5>Genre</h5>
      <h2>Title</h2>
      <p>Author</p>
      <div>
        <a href="http://localhost:3000/">Comments</a>
        <a href="http://localhost:3000/">Remove</a>
        <a href="http://localhost:3000/">Edit</a>
      </div>
    </div>
  );
}

export default Book;
