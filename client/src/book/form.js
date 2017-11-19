import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, inputName: "", inputAuthor: "", inputCategories: [] }
  }

  handleName = (e) => {
    this.setState({inputName: e.target.value});
  }

  handleAuthor = (e) => {
    this.setState({inputAuthor: e.target.value});
  }

  handleCategories = (e) => {
    let selected = [...e.target.options].filter(option => option.selected)
                                        .map(option => option.value)
    this.setState({inputCategories: selected});
  }

  render() {
    if(!this.state.editing){
      return (
        <div className="col-sm-6">
          <button type="button"  onClick={() => this.setState({editing: true})} className="btn btn-default btn-sm">
             Add Book
          </button>
        </div>
      )
    }else{
      return (
        <div>
          <label>Name:</label>
          <input type="text" className="form-control" onChange={this.handleName}/>
          <label>Author:</label>
          <input type="text" className="form-control" onChange={this.handleAuthor}/>
          <label>Categories:</label>
          <select multiple onChange={this.handleCategories} className="form-control">
            {this.props.categories.map((option, index) =>
              <option key={index} value={option.id}>
               {option.name}
              </option>
            )}
          </select>
          <button type="button" onClick={(e) => {this.setState({editing: false});
                                 this.props.addBook(this.state.inputName, this.state.inputAuthor, this.state.inputCategories)}}
                                 className="btn btn-success">Save</button>
        </div>
      )
    }
  }
}

export default Form
