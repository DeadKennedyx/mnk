import React from 'react'

class ListRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, inputName: "", inputDescription: ""}
  }
  handleName = (e) => {
    this.setState({inputName: e.target.value});
  }
  handleDescription = (e) => {
    this.setState({inputDescription: e.target.value});
  }
  render() {
    if(!this.state.editing){
      return(
        <tr>
          <td>
              {this.props.name}
          </td>
          <td>
              {this.props.description}
          </td>
          <td>
            <button type="button" onClick={() => this.setState({editing: true})} className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </td>
          <td>
            <button type="button" onClick={this.props.deleteCategory.bind(null, this.props.id)} className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </td>
        </tr>
      )
    }else{
      return(
        <tr>
          <td>
            <input type="text" onChange={this.handleName} name="categoryName" id="categoryId"/>
          </td>
          <td>
            <input type="text" onChange={this.handleDescription} name="categoryDescription" id="categoryDescription"/>
          </td>
          <td>
            <button type="button" onClick={(e) => {this.setState({editing: false});
                                                  this.props.updateCategory(this.props.id, this.state.inputName, this.state.inputDescription)}}
                                                  className="btn btn-success">Save</button>
          </td>
        </tr>
      )
    }
  }
}

export default ListRow
