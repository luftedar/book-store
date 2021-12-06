import React from 'react';

function Header() {
  return (
    <div className="nav">
      <h1>Bookstore CMS</h1>
      <div className="nav-links">
        <a href="/">Books</a>
        <a href="/categories">Categories</a>
      </div>
    </div>
  );
}

export default Header;
