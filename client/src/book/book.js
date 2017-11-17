import React, { Component } from 'react';
import List from './list'

class Book extends Component {

  constructor(props) {
    super(props)
    this.state= { books:[] }
    this.deleteBook = this.deleteBook.bind(this)
    this.updateBook = this.updateBook.bind(this)
  }

  componentWillMount() {
    fetch('books')
      .then((response) => {
        return response.json()
      })
      .then((books) => {
        this.setState({ books: books })
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
