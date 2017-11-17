import React from 'react'
import ListRow from './listRow'

class List extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <table>
          <tr>
            <th>Book Name</th>
            <th>Book Author</th>
            <th>Available?</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          <tbody>
              {
                this.props.listing.map((record) => {
                  return <ListRow updateBook={ this.props.updateBook }
                                  deleteBook={ this.props.deleteBook }
                                  key={ record.id }
                                  id={ record.id }
                                  name={ record.name }
                                  author={ record.author }
                                  available={ record.available } />
                })
              }
          </tbody>
        </table>
      </div>
    )
  }
}

export default List
