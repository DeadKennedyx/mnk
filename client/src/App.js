import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {}
    this.getUsers = this.getUsers.bind(this)
    this.getUser = this.getUser.bind(this)
  }

  fetch (endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getUsers () {
    this.fetch('/users')
      .then(users => {
        this.setState({users: users})
        this.getUser(users[0].id)
      })
  }

  getUser (id) {
    this.fetch(`users/${id}`)
      .then(user => this.setState({user: user}))
  }

  render () {
    let {users, user} = this.state
    return users
  }
}

export default App;
