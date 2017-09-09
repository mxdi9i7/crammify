import React, { Component } from 'react';
import SearchBar from './SearchBar'
import Navbar from './Navbar'

class SearchPage extends Component {
  render() {
    return (
      	<div>
              <Navbar />
              Search Page
              <SearchBar />
        </div>
    );
  }
}

export default SearchPage;
