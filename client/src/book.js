import React, { Component } from 'react';
import List from './list'

class Book extends Component {

  constructor(props){
    super(props)
    this.state= { books:[] }
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
                  <List listing={this.state.books} />
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
