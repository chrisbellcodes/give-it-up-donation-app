import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const CartList = props => {
  const renderVices = () => {
    return props.cart.map(vice => {
      return (
        <tr key={vice.id}>
          <td>{vice.name}</td>
          <td>${vice.amount}</td>
          <td>
            <Button onClick={e => props.removeVice(vice)}>Remove Vice</Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <React.Fragment>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>VICE</th>
            <th>COST</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>{renderVices()}</tbody>
      </Table>
    </React.Fragment>
  );
};

export default CartList;
