import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, inputName: "", inputDescription: "" }
  }

  handleName = (e) => {
    this.setState({inputName: e.target.value});
  }

  handleDescription = (e) => {
    this.setState({inputDescription: e.target.value});
  }

  render() {
    if(!this.state.editing){
      return (
        <div className="col-sm-6">
          <button type="button"  onClick={() => this.setState({editing: true})} className="btn btn-default btn-sm">
             Add Category
          </button>
        </div>
      )
    }else{
      return (
        <div>
          <label>Name:</label>
          <input type="text" className="form-control" onChange={this.handleName}/>
          <label>Description:</label>
          <input type="text" className="form-control" onChange={this.handleDescription}/>
          <button type="button" onClick={(e) => {this.setState({editing: false});
                                 this.props.addCategory(this.state.inputName, this.state.inputDescription)}}
                                 className="btn btn-success">Save</button>
          <button type="button" className="btn btn-default btn-sm" onClick={() => {this.setState({editing: false})}}>Cancel</button>

        </div>
      )
    }
  }
}

export default Form
