import React from "react";
import { Route, Link } from "react-router-dom";

import BookStack from "./BookStack";
import Search from "./Search";
import * as BooksAPI from "./BooksAPI";

import "./App.css";

/* Main Application */
class BooksApp extends React.Component {
  state = { books: [] };

  /* Move books between shelves */
  bookMove = (bookNew, newShelf) => {
    BooksAPI.update(bookNew, newShelf).then(response => {
      bookNew.shelf = newShelf;
      var updatedBooks = this.state.books.filter(
        book => book.id !== bookNew.id
      );
      updatedBooks.push(bookNew);
      this.setState({ books: updatedBooks });
    });
  };

  /* Component handler to get library data */
    componentDidMount() {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
        });
    }
  render() {
    const { books } = this.state;
    return (
      <div className="app">
        {/* Book Shelf Page */}
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookStack books={books} bookMove={this.bookMove} />
              <div className="open-search">
                <Link to="/search">Search</Link>
              </div>
            </div>
          )}
        />

        {/* Search Page */}
        <Route
          path="/search"
          render={({ history }) => (
            <Search books={books} bookMove={this.bookMove} />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
