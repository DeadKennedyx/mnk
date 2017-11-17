import React, { Component } from 'react';

class App extends Component {
  render () {
    return <div>
      <div className="jumbotron col-md-12">
        <h1>Library</h1>
        <p>Web application for managing books, users and categories.</p>
      </div>
      <div>
        <div className="col-md-4">
            <a href="books">Books</a>
        </div>
        <div className="col-md-4">
            <a href="users">Users</a>
        </div>
        <div className="col-md-4">
            <a href="categories">Categories</a>
        </div>
      </div>
    </div>
  }
}



export default App;
