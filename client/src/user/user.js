import React, { Component } from 'react';
import List from './list'

class User extends Component {

  constructor(props) {
    super(props)
    this.state= { users:[] }
    this.deleteUser = this.deleteUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentWillMount() {
    fetch('users')
      .then((response) => {
        return response.json()
      })
      .then((users) => {
        this.setState({ users: users })
      })
  }

  updateUser(id,name,email){
    fetch('users/'+id, {
      method: 'put',
      headers: new Headers({'content-type': 'application/json'}),
      body:
      JSON.stringify({
          "user":{
            "name": name,
            "email": email
          }
      })
    }).then(response =>
      this.componentWillMount()
    )
  }

  deleteUser(id) {
    fetch('users/'+id, {
      method: 'delete'
    }).then(response =>
      this.componentWillMount()
    )
  }

  render () {
      if(this.state.users.length > 0){
        console.log(this.state.users)
        return(
          <div>
            <div className="jumbotron col-md-12">
              <h1>Users</h1>
              <p>Users management</p>
            </div>
            <div>
              <div className="col-md-12">
                <div className="container-fluid">
                  <List deleteUser={this.deleteUser}
                        updateUser={this.updateUser}
                        listing={this.state.users} />
                </div>
              </div>
            </div>
          </div>
        )
      }else{
        return <p className="text-center">Loading Users...</p>
      }
  }
}



export default User;
