import React from 'react';
import { BiUserCircle } from 'react-icons/bi';

function Header() {
  return (
    <div className="nav mont">
      <div className="left-nav">
        <h1>Bookstore CMS</h1>
        <div className="nav-links">
          <a href="/">Books</a>
          <a href="/categories">Categories</a>
        </div>
      </div>
      <div>
        <BiUserCircle className="user-icon" size={45} />
      </div>
    </div>
  );
}

export default Header;
