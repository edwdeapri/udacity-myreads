import React from "react";
import PropTypes from "prop-types";

/* This component creates the dropdown menu to move books to and between shelves. */

const BookMove = props => {
  const { book, books, bookMove } = props;
  let bookShelf = "none";

  for (let item of books) {
    if (item.id === book.id) {
      bookShelf = item.shelf;
      break;
    }
  }

  return (
    <div className="book-shelf-changer">
      <select
        onChange={event => bookMove(book, event.target.value)}
        defaultValue={bookShelf}
      >
        <option value="none" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Looking Forward to Reading</option>
        <option value="read">Already Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};

BookMove.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  bookMove: PropTypes.func.isRequired
};

export default BookMove;
