import React from "react";
import PropTypes from "prop-types";

import BookShelf from "./BookShelf";

/* This component builds the books on the shelves. */

class BookStack extends React.Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired
  };

  render() {
    const { books, bookMove } = this.props;

    /* Setting the book shelves */
    const bookShelfs = [
      { type: "currentlyReading", title: "What I am Currently Reading" },
      { type: "wantToRead", title: "What I am Looking Forward to Reading" },
      { type: "read", title: "What I Have Already Read" }
    ];

    return (
      <div className="list-books-content">
        {bookShelfs.map((shelf, index) => {
          const shelfBooks = books.filter(book => book.shelf === shelf.type);

          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelf books={shelfBooks} bookMove={bookMove} />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookStack;
