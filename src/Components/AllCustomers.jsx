import React, { Component } from "react";
import Pagination from "./SmallerComponents/Pagination";
import ListGroup from "./SmallerComponents/ListGroup";
import Customer from "./SmallerComponents/Customer";
class AllCustomers extends Component {
  render() {
    const {
      Packages,
      customers,
     onPageChange,
      onPackageFilter,
      selectedPackage,
      onValueChange,
      onSave,
    } = this.props;
   
if(! Packages && !customers) return null;

    return (
      <div className="row">
        <div className="col-4">
          <ListGroup
            items={Packages}
            onFilter={onPackageFilter}
            selectedItem={selectedPackage}
          />
        </div>
        <div className="col">
          <table className=" mx-auto table">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Name</th>
                <th scope="col">Package</th>
                <th scope="col">Phone</th>
                <th scope="col"> Adress </th>
                <th scope="col"> Suscribe Date</th>
                <th scope="col"> Connection Date</th>
                <th scope="col"> Days Remaining</th>
                
                <th scope="col"> Payment Due</th>
                <th scope="col"> PPPOeId</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <Customer
                  key={customer._id}
                  customer={customer}
                  onValueChange={onValueChange}
                  onSave={onSave}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            itemsCount={this.props.itemCount}
            pageSize={4}
            onPageChange={onPageChange}
          />
        </div>
      </div>
    );
  }
}

export default AllCustomers;
