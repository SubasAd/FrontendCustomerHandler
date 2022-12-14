import React, { Component } from "react";
class TableRow extends Component {
  render() {
    const { id, Cost, PayedAmount, DateofPayment, onValueChange, onDelete } = this.props;
    if(!id) return null;
    return (
      <tr>
        <td>{id}</td>
        <td>
          <input
            className=" border-0"
            value={Cost}
            onChange={(e) => {
              onValueChange("Cost", e, id);
            }}
          />
        </td>
        <td>
          <input
            className=" border-0"
            value={DateofPayment}
            onChange={(e) => {
              onValueChange("DateofPayment", e, id);
            }}
          />
        </td>
        <td>
          <input
            className=" border-0"
            value={PayedAmount}
            onChange={(e) => {
              onValueChange("PayedAmount", e, id);
            }}
          />
        </td>
        <td>
          <button onClick={e=>{
            e.preventDefault();
           onDelete(id);
          }} >
            delete
          </button>
        </td>
      </tr>
    );
  }
}

export default TableRow;
