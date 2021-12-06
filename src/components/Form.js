import React from 'react';

function Form() {
  return (
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
  );
}

export default Form;
