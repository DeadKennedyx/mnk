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
            <th>Book Available?</th>
          </tr>
          <tbody>
              {
                this.props.listing.map((record) => {
                  return <ListRow key={ record.id }
                                      name={ record.name }
                                      author={ record.author }
                                      available={ record.available }
                                      department={ record.department } />
                })
              }
          </tbody>
        </table>
      </div>
    )
  }
}

export default List
