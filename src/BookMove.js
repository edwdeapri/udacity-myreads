import React from 'react';
import PropTypes from 'prop-types';

class BookMove extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired,
  };

  render() {
    const { book, books, bookMove } = this.props;

    let currentShelf = 'none';

    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookMove;
