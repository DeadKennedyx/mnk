import React from 'react'
import ListRow from './listRow'

class List extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <table className="table table-inverse">
          <thead>
            <tr>
              <th>User Name</th>
              <th>User Email</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {
                this.props.listing.map((record) => {
                  return <ListRow updateUser={ this.props.updateUser }
                                  deleteUser={ this.props.deleteUser }
                                  key={ record.id }
                                  id={ record.id }
                                  name={ record.name }
                                  email={ record.email }/>
                })
              }
          </tbody>
        </table>
      </div>
    )
  }
}

export default List
