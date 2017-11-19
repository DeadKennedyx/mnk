import React, { Component } from 'react';
import List from './list'
import Form from './form'

class Book extends Component {

  constructor(props) {
    super(props)
    this.state= { books: [], page: 1, currentPage: 1, totalPages: 1, users: [], categories: [] }
    this.deleteBook = this.deleteBook.bind(this)
    this.updateBook = this.updateBook.bind(this)
    this.addBook = this.addBook.bind(this)
  }

  componentWillMount() {
    fetch('books?page='+ this.state.page )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data);
        this.setState({ books: data.books, currentPage: data.meta.currentPage, totalPages: data.meta.totalPages })
      })
    fetch('categories')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ categories: data.categories })
      })
    fetch('users')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ users: data.users })
      })
  }

  handlePrevPage(page) {
    let prevPage = page - 1
    if(prevPage < 1){
      prevPage = 1
    }
    this.setState({currentPage: prevPage})
    fetch('books?page='+ prevPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ books: data.books, currentPage: data.meta.currentPage })
    })
  }

  handleNextPage(page) {
    let nextPage = page + 1
    if(nextPage > this.state.totalPages){
      nextPage = page
    }
    this.setState({currentPage: nextPage})
    fetch('books?page='+ nextPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ books: data.books, currentPage: data.meta.currentPage })
    })
  }

  addBook(name, author, category_ids, user_id) {
    fetch('books', {
      method: 'post',
      headers: new Headers({'content-type': 'application/json'}),
      body:
      JSON.stringify({
        "book":{
          "name": name,
          "author": author,
          "category_ids": category_ids,
          "user_id": user_id
        }
      })
    }).then(response =>
      this.componentWillMount()
    )
  }

  updateBook(id,name,author) {
    fetch('books/'+id, {
      method: 'put',
      headers: new Headers({'content-type': 'application/json'}),
      body:
      JSON.stringify({
        "book":{
          "name": name,
          "author": author
        }
      })
    }).then(response =>
      this.componentWillMount()
    )
  }

  deleteBook(id) {
    fetch('books/'+id, {
      method: 'delete'
    }).then(response =>
      this.componentWillMount()
    )
  }

  render () {
      if(this.state.books.length > 0){
        console.log(this.state.books)
        return(
          <div>
            <div className="jumbotron col-md-12">
              <h1>Books</h1>
              <p>Books management</p>
              <a href="/">Home</a>
            </div>
            <div>
              <div className="col-md-12">
                <div className="container-fluid">
                  <List deleteBook={this.deleteBook}
                        updateBook={this.updateBook}
                        listing={this.state.books}/>
                  <Form addBook={this.addBook} users={this.state.users} categories={this.state.categories}/>
                  <button type="button" onClick={() => this.handleNextPage(this.state.currentPage)} className="btn btn-default btn-sm pull-right">
                    <span className="glyphicon glyphicon-chevron-right"></span> Next
                  </button>
                  <button type="button" onClick={() => {this.handlePrevPage(this.state.currentPage)}} className="btn btn-default btn-sm pull-right">
                    <span className="glyphicon glyphicon-chevron-left"></span> Previous
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      }else{
        return <p className="text-center">Loading Books...</p>
      }
  }
}



export default Book;
