import React from 'react'

class ListRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, inputName: "", inputEmail: ""}
  }

  handleName = (e) => {
    this.setState({inputName: e.target.value});
  }

  handleEmail = (e) => {
    this.setState({inputEmail: e.target.value});
  }

  render() {
    if(!this.state.editing){
      return(
        <tr>
          <td>
              {this.props.name}
          </td>
          <td>
              {this.props.email}
          </td>
          <td>
            <button type="button" onClick={() => this.setState({editing: true})} className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </td>
          <td>
            <button type="button" onClick={this.props.deleteUser.bind(null, this.props.id)} className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </td>
        </tr>
      )
    }else{
      return(
        <tr>
          <td>
            <input type="text" onChange={this.handleName} defaultValue={this.props.name} name="userName" id="userId"/>
          </td>
          <td>
            <input type="text" onChange={this.handleEmail} defaultValue={this.props.email} name="userEmail" id="userEmail"/>
          </td>
          <td>
            <button type="button" onClick={(e) => {this.setState({editing: false});
                                                  this.props.updateUser(this.props.id, this.state.inputName, this.state.inputEmail)}}
                                                  className="btn btn-success">Save</button>
            <button type="button" className="btn btn-default btn-sm" onClick={() => {this.setState({editing: false})}}>Cancel</button>
          </td>
        </tr>
      )
    }
  }
}

export default ListRow
