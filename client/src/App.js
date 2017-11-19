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
                <a href="/books">
                  <img src="http://hddfhm.com/images/book-icon-clipart-6.png" className="image"/>
                  <div className="overlay">
                    <div className="text">Books</div>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 img-container">
                <a href="/users">
                  <img src="http://www.pvhc.net/img1/aqdxbomfsxkxpifidppy.png" className="image"/>
                  <div className="overlay">
                    <div className="text">Users</div>
                  </div>
                </a>
              </div>
              <div className="col-sm-4 img-container">
                <a href="/categories">
                  <img src="http://hddfhm.com/images/book-icon-clipart-6.png" className="image"/>
                  <div className="overlay">
                    <div className="text">Hello World</div>
                  </div>
                </a>
              </div>
          </div>
      </div>
    </div>
  }
}



export default App;
