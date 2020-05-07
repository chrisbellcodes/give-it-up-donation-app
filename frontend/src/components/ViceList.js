import React from 'react'
import { connect } from 'react-redux'
import Table from 'react-bootstrap/Table'


const ViceList = (props) => {
  const renderVices = () => {
    return props.cart.map(vice => {
      return (<tr key={vice.id}>
                <td>{vice.name}</td>
                <td>{vice.amount}</td>
              </tr>)
    })
  }

  return(<Table striped bordered hover variant="dark">
    <thead>
      <tr>
        <th>VICE</th>
        <th>DONATION</th>
      </tr>
    </thead>
    <tbody>
        {renderVices()}
    </tbody>
  </Table>)

}

const mapStateToProps = (state) => {
  return {
    cart: state.currentUser.vices
  }
}

export default connect(mapStateToProps)(ViceList)
