import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const CartList = props => {
  const renderVices = () => {
    return props.cart.map(vice => {
      return (
        <tr className="cart-list__row" key={vice.id}>
          <td className="cl-col__text">{vice.name}</td>
          <td className="cl-col__text">${vice.amount}</td>
          <td className="cl-remove-btn-container">
            <Button className="cart-list__remove-btn" onClick={e => props.removeVice(vice)}>Remove Vice</Button>
          </td>
        </tr>
      );
    });
  };

  return (
    <React.Fragment>
      <Table className="cl-table" striped bordered hover variant="dark">
        <thead>
          <tr className="cl-table-header">
            <th className="cl-table-header__text">VICE</th>
            <th className="cl-table-header__text">COST</th>
            <th className="cl-table-header__text"></th>
          </tr>
        </thead>
        <tbody>{renderVices()}</tbody>
      </Table>
    </React.Fragment>
  );
};

export default CartList;
