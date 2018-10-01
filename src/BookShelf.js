import React from "react";
import PropTypes from "prop-types";
import Book from "./Book";

/* This component builds the book shelves */

class BookShelf extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired
  };

  render() {
    const { books, bookMove } = this.props;

    return (
      <ol className="books-grid">
        {books.map(book => (
          <Book book={book} key={book.id} books={books} bookMove={bookMove} />
        ))}
      </ol>
    );
  }
}

export default BookShelf;
