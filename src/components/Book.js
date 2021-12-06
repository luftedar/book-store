import React from 'react';

/* eslint-disable react/prop-types */
const Book = function (props) {
  const { title, author } = props;
  return (
    <div className="book-item">
      <div className="book-desc">
        <h5>Genre</h5>
        <h2>{title}</h2>
        <p>{author}</p>
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
