import React from 'react'

class ListRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = {editing: false, inputName: "", inputAuthor: ""}
  }
  handleName = (e) => {
    this.setState({inputName: e.target.value});
  }
  handleAuthor = (e) => {
    this.setState({inputAuthor: e.target.value});
  }
  render() {
    let isAvailable = (props) => {
      if(props.available){
        return "Available"
      }else{
        return "Unavailable"
      }
    }
    if(!this.state.editing){
      return(
        <tr>
          <td>
              {this.props.name}
              {this.props.id}
          </td>
          <td>
              {this.props.author}
          </td>
          <td>
            {isAvailable(this.props)}
          </td>
          <td>
            <button type="button" onClick={() => this.setState({editing: true})} className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-pencil"></span>
            </button>
          </td>
          <td>
            <button type="button" onClick={this.props.deleteBook.bind(null, this.props.id)} className="btn btn-default btn-sm">
              <span className="glyphicon glyphicon-trash"></span>
            </button>
          </td>
        </tr>
      )
    }else{
      return(
        <tr>
          <td>
            <input type="text" onChange={this.handleName} name="bookName" id="bookId"/>
          </td>
          <td>
            <input type="text" onChange={this.handleAuthor} name="bookDescription" id="bookDescription"/>
          </td>
          <td>
            <button type="button" onClick={(e) => {this.setState({editing: false});
                                                  this.props.updateBook(this.props.id, this.state.inputName, this.state.inputAuthor)}}
                                                  className="btn btn-success">Save</button>
          </td>
        </tr>
      )
    }
  }
}

export default ListRow
