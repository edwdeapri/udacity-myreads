import React from 'react';
import PropTypes from 'prop-types';
import BookMove from './BookMove';

class Book extends React.Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired,
  };

  render() {
    const { book, books, bookMove } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }}>
            </div>
            <bookMove
              book={ book }
              books={ books }
              bookMove={ bookMove }
              />
          </div>
          <div className="book-title">{ book.title }</div>
          <div className="book-authors">{ book.author }</div>
        </div>
      </li>
    );
  }
}

export default Book;
