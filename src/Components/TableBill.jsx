import React, { Component } from "react";
import TableRow from "./SmallerComponents/TableRow";
class Table extends Component {

  render() {
    return (
      <> 
      
        <table className=" mx-auto table">
          <thead>
            <tr>
              <th scope="col">SN</th>
              <th scope="col">Cost</th>
              <th scope="col">Date of Payment</th>
              <th scope="col">Payed Amount</th>
            </tr>
          </thead>
          <tbody>
            {this.props.customer.MonthlyCost.map((month) => (

              <TableRow
                key={this.props.customer.MonthlyCost.indexOf(month)}
                id={this.props.customer.MonthlyCost.indexOf(month) +1}
                Cost={month.Cost}
                PayedAmount={month.PayedAmount}
                DateofPayment={month.DateofPayment}
                onValueChange={this.props.onValueChange}
                onDelete = {this.props.onDelete}
              />
            ))}
          </tbody>
        </table>
        <button
          onClick={(e) => {
            e.preventDefault();
            this.props.onNewRow();
          }}
        >
          
          Add new
        </button>
      </>
    );
  }
}

export default Table;
