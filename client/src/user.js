import React, { Component } from 'react';

class User extends Component {
  render () {
    return <div>
      <div className="jumbotron col-md-12">
        <h1>Users</h1>
        <p>Users management</p>
      </div>
      <div>
        <div className="col-md-4">
            Books
        </div>
        <div className="col-md-4">
            Users
        </div>
        <div className="col-md-4">
            Categories
        </div>
      </div>
    </div>
  }
}



export default User;
