import React, { Component } from "react";
import Table from "./TableBill";
class BillInvoice extends Component {
  //customer
  render() {
    const { customer } = this.props;
  
    
    return (
      <div className="border-2 m-5 p-5">
        <div className="card  mx-auto w-50 border-0">
          <b>
            Name: <u> {customer.Name}</u>{" "}
          </b>
          Package :{customer.Package.Name}
          <br />
          Monthly Cost :{customer.Package.MonthlyCost}
          <br />
          Payment Cleared:{customer.PaymentCleared}
          <br />
        </div>
        <u>Payment Status</u> <br />
        <Table customer={customer} />
        <p className="text-right">
          Payment Due :
          <span className="bg-light text-danger text-center">
            {" "}
            {customer.PaymentDue}
          </span>{" "}
        </p>
        <hr />
      </div>
    );
  }
}

export default BillInvoice;
