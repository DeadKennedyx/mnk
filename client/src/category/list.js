import React from 'react'
import ListRow from './listRow'

class List extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-inverse">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Category Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                this.props.listing.map((record) => {
                  return <ListRow updateCategory={ this.props.updateCategory }
                                  deleteCategory={ this.props.deleteCategory }
                                  key={ record.id }
                                  id={ record.id }
                                  name={ record.name }
                                  description={ record.description }/>
                })
              }
          </tbody>
        </table>
      </div>
    )
  }
}

export default List
