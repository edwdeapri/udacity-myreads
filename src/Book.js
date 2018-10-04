import React from "react";
import PropTypes from "prop-types";

import BookMove from "./BookMove";

import BookCoverError from "./icons/missing-cover-image.png";

/* This component builds the book */

const Book = props => {
  const { book, books, bookMove } = props;

  /* Checking to see if cover, title and author is present, provide alternative if not.*/
  const bookCover =
    book.imageLinks && book.imageLinks.thumbnail
      ? book.imageLinks.thumbnail
      : BookCoverError;
  const bookTitle = book.title ? book.title : "Title Unavailable";
  const bookAuthors = book.authors
    ? Array.isArray(book.authors)
      ? book.authors.join(", ")
      : ""
    : "Author Unavailable";

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              backgroundImage: `url(${bookCover})`
            }}
          />
          <BookMove book={book} books={books} bookMove={bookMove} />
        </div>
        <div className="book-title">{bookTitle}</div>
        <div className="book-authors">{bookAuthors}</div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  bookMove: PropTypes.func.isRequired
};

export default Book;
