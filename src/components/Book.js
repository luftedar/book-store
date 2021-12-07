/* eslint-disable react/prop-types */
const Book = function (props) {
  const { title, author } = props;
  return (
    <li>
      <span>
        { title }
        { author }
      </span>
    </li>
  );
};

export default Book;
