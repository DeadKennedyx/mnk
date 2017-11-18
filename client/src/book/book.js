import React, { Component } from 'react';
import List from './list'

class Book extends Component {

  constructor(props) {
    super(props)
    this.state= { books:[], page: 1, currentPage: 1 }
    this.deleteBook = this.deleteBook.bind(this)
    this.updateBook = this.updateBook.bind(this)
  }

  componentWillMount() {
    fetch('books?page='+ this.state.page )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ books: data.books, currentPage: data.meta.currentPage })
      })
  }

  handlePrevPage(page){
    let prevPage = page - 1
    this.setState({currentPage: prevPage})
    fetch('books?page='+ prevPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ books: data.books, currentPage: data.meta.currentPage })
    })
  }

  handleNextPage(page){
    let nextPage = page + 1
    console.log(nextPage);
    this.setState({currentPage: nextPage})
    fetch('books?page='+ nextPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ books: data.books, currentPage: data.meta.currentPage })
    })
  }

  updateBook(id,name,author,available){
    fetch('books/'+id, {
      method: 'put',
      headers: new Headers({'content-type': 'application/json'}),
      body:
      JSON.stringify({
          "book":{
            "name": name,
            "author": author,
            "available": available
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
            </div>
            <div>
              <div className="col-md-12">
                <div className="container-fluid">
                  <List deleteBook={this.deleteBook}
                        updateBook={this.updateBook}
                        listing={this.state.books} />
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
        return <p className="text-center">Loading Books...</p>
      }
  }
}



export default Book;
