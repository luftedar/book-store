import React from 'react';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Header() {
  return (
    <div className="nav mont">
      <div className="left-nav">
        <h1>Bookstore CMS</h1>
        <div className="nav-links">
          <Link to="/">Books</Link>
          <Link to="/categories">Categories</Link>
        </div>
      </div>
      <div>
        <BiUserCircle className="user-icon" size={45} />
      </div>
    </div>
  );
}

export default Header;
