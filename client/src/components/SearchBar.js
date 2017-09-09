import React, { Component } from 'react';


class SearchBar extends Component {
  render() {
    return (
        <div>
            <input type="text" />
            <button className="btn btn-primary">Search</button>
        </div>
    );
  }
}

export default SearchBar;
