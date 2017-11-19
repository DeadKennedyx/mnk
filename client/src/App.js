import React, { Component } from 'react';

class App extends Component {
  render () {
    return <div>
      <div className="jumbotron col-md-12">
        <h1>Library</h1>
        <p>Web application for managing books, users and categories.</p>
      </div>
      <div className="container">
          <div className="row imagetiles">
              <div className="col-sm-4 img-container">
                <a href="/books" className="nav-link">
                  <img src="http://hddfhm.com/images/book-icon-clipart-6.png" className="image"/>
                  <div className="overlay">
                    <p>Books</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 img-container">
                <a href="/users" className="nav-link">
                  <img src="http://www.pvhc.net/img1/aqdxbomfsxkxpifidppy.png" className="image"/>
                  <div className="overlay">
                    <p>Users</p>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 img-container">
                <a href="/categories" className="nav-link">
                  <img src="https://maxcdn.icons8.com/Share/icon/Ecommerce//tags1600.png" className="image"/>
                  <div className="overlay">
                    <p>Categories</p>
                  </div>
                </a>
              </div>
          </div>
      </div>
    </div>
  }
}



export default App;
