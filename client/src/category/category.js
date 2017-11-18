import React, { Component } from 'react';
import List from './list'

class Category extends Component {

  constructor(props) {
    super(props)
    this.state= { categories:[], page: 1, currentPage: 1 }
    this.deleteCategory = this.deleteCategory.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
  }

  componentWillMount() {
    fetch('categories?page='+ this.state.page)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        this.setState({ categories: data.categories, currentPage: data.meta.currentPage })
      })
  }

  handlePrevPage(page){
    let prevPage = page - 1
    this.setState({currentPage: prevPage})
    fetch('categories?page='+ prevPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ categories: data.categories, currentPage: data.meta.currentPage })
    })
  }

  handleNextPage(page){
    let nextPage = page + 1
    console.log(nextPage);
    this.setState({currentPage: nextPage})
    fetch('categories?page='+ nextPage )
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ categories: data.categories, currentPage: data.meta.currentPage })
    })
  }

  updateCategory(id,name,description){
    fetch('categories/'+id, {
      method: 'put',
      headers: new Headers({'content-type': 'application/json'}),
      body:
      JSON.stringify({
          "category":{
            "name": name,
            "description": description
          }
      })
    }).then(response =>
      this.componentWillMount()
    )
  }

  deleteCategory(id) {
    fetch('categories/'+id, {
      method: 'delete'
    }).then(response =>
      this.componentWillMount()
    )
  }

  render () {
      if(this.state.categories.length > 0){
        return(
          <div>
            <div className="jumbotron col-md-12">
              <h1>Categories</h1>
              <p>Categories management</p>
            </div>
            <div>
              <div className="col-md-12">
                <div className="container-fluid">
                  <List deleteCategory={this.deleteCategory}
                        updateCategory={this.updateCategory}
                        listing={this.state.categories} />
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
        return <p className="text-center">Loading Categories...</p>
      }
  }
}



export default Category;