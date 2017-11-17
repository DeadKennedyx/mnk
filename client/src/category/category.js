import React, { Component } from 'react';
import List from './list'

class Category extends Component {

  constructor(props) {
    super(props)
    this.state= { categories:[] }
    this.deleteCategory = this.deleteCategory.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
  }

  componentWillMount() {
    fetch('categories')
      .then((response) => {
        return response.json()
      })
      .then((categories) => {
        this.setState({ categories: categories })
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
        console.log(this.state.categories)
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
