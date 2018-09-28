import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Book from './Book';
import * as BooksAPI from './BooksAPI';
import './App.css';

class Search extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired,
    bookMove: PropTypes.func.isRequired,
  };

  state = {
    query: '',
    bookNew: [],
    error: false,
  };

  retrieve = (event) => {
    const query = event.target.value.trim();
    this.setState({ query: query });
    if (query) {
      BooksAPI.search(query, 20).then((books) => {
        books.length > 0 ?  this.setState({ bookNew: books, error: false }) : this.setState({ bookNew: [], error: true });
      });
    } else this.setState({ bookNew: [], error: false });
  };

  render() {
    const { query, bookNew, error } = this.state;
    const { books, bookMove } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"  to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Please search by title, author or keyword."
              value={ query }
              onChange={ this.retrieve } />
          </div>
        </div>
        <div className="search-books-results">
          { bookNew.length > 0 && (
            <div>
              <div className=''>
                <h3>Search returned { bookNew.length } books </h3>
              </div>
              <ol className="books-grid">
                {bookNew.map((book) => (
                  <Book
                    book={ book }
                    key={ book.id }
                    books={ books }
                    bookMove={ bookMove }
                  />
                ))}
              </ol>
            </div>
          )}
          { error  && (
            <div>
              <div className=''>
                <h3>Your search didn't find a book. Try again with a different keyword.</h3>
                </div>
              </div>
          )}
        </div>
      </div>
    );
  };
}

export default Search;
