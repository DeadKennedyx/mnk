import React from 'react'

class ListRow extends React.Component {
  render() {
    return(
      <tr>
        <td>
            {this.props.name}
        </td>
        <td>
            {this.props.author}
        </td>
        <td>
            {this.props.available}
        </td>
      </tr>
    )
  }
}

export default ListRow
