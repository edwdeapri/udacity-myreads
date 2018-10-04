import React from "react";
import PropTypes from "prop-types";

import Book from "./Book";

/* This component builds the book shelves */

const BookShelf = props => {
  const { books, bookMove } = props;

  return (
    <ol className="books-grid">
      {books.map(book => (
        <Book book={book} key={book.id} books={books} bookMove={bookMove} />
      ))}
    </ol>
  );

  BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired
  };
};

export default BookShelf;
