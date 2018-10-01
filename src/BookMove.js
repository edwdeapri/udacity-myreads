import React from "react";
import PropTypes from "prop-types";

/* This component creates the dropdown menu to move books to and between shelves. */

class BookMove extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired
  };

  render() {
    const { book, books, bookMove } = this.props;

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
          <option value="currentRead">Currently Reading</option>
          <option value="futureRead">Looking Forward to Reading</option>
          <option value="pastRead">Already Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookMove;
