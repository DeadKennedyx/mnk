import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, inputName: "", inputEmail: "" }
  }

  handleName = (e) => {
    this.setState({inputName: e.target.value});
  }

  handleEmail = (e) => {
    this.setState({inputEmail: e.target.value});
  }

  render() {
    if(!this.state.editing){
      return (
        <div>
          <button type="button"  onClick={() => this.setState({editing: true})} className="btn btn-default btn-sm">
             Add User
          </button>
        </div>
      )
    }else{
      return (
        <div>
          <label>Name:</label>
          <input type="text" className="form-control" onChange={this.handleName}/>
          <label>Author:</label>
          <input type="text" className="form-control" onChange={this.handleEmail}/>
          <button type="button" onClick={(e) => {this.setState({editing: false});
                                 this.props.addUser(this.state.inputName, this.state.inputEmail)}}
                                 className="btn btn-success">Save</button>
        </div>
      )
    }
  }
}

export default Form
