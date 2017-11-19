import React, { Component } from 'react';
import List from './list'
import Form from './form'

class User extends Component {

  constructor(props) {
    super(props)
    this.state= { users:[], page: 1, currentPage: 1 }
    this.deleteUser = this.deleteUser.bind(this)
    this.updateUser = this.updateUser.bind(this)
    this.addUser = this.addUser.bind(this)
  }

  componentWillMount() {
    fetch('users?page=' + this.state.page)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ users: data.users, currentPage: data.meta.currentPage })
      })
  }

  handlePrevPage(page){
    let prevPage = page - 1
    this.setState({currentPage: prevPage})
    fetch('users?page='+ prevPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ users: data.users, currentPage: data.meta.currentPage })
    })
  }

  handleNextPage(page){
    let nextPage = page + 1
    console.log(nextPage);
    this.setState({currentPage: nextPage})
    fetch('users?page='+ nextPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ users: data.users, currentPage: data.meta.currentPage })
    })
  }

  addUser(name, email) {
    fetch('users', {
      method: 'post',
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
                  <Form addUser={this.addUser}/>
                  <button type="button" onClick={() => {this.handlePrevPage(this.state.currentPage)}} className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-chevron-left"></span> Previous
                  </button>
                  <button type="button" onClick={() => this.handleNextPage(this.state.currentPage)} className="btn btn-default btn-sm">
                    <span className="glyphicon glyphicon-chevron-right"></span> Next
                  </button>
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
