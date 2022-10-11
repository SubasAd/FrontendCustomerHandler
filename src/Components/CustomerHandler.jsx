import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import BillInvoice from "./BillInvoice";
import AllCustomers from "./AllCustomers";
import CreateCustomer from "./storeCustomer";
import EditCustomer from "./EditCustomer";
import customerService from "../Services/customerService";
import Utility, { filter } from "../Utility/Utility";

import { saveCustomer, getPackages } from "../Services/customerService";
class Customers extends Component {
  state = {
    customers: [],
    packages: [],

    currentPackage: { Name: "All Packages" },
    currentPage :1,
 
  };
  async componentDidMount() {
    this.setState({ customers: await customerService() });
    const packages = await getPackages()
    if(!packages) return;
    this.setState({
      packages: [
        { Name: "All Packages", MonthlyCost: 1250 },
        ...( packages),
      ],
    });
  }

  saveCustomer = async (customer) => {
    
    let customers =this.state.customers? [...this.state.customers]: [ ];
    
    Utility(customer);
    this.setState({customers});
    await saveCustomer(customer);
  };
  onPackageFilter = async (Package) => {
    this.setState({ currentPackage: Package });
  };

  editCustomer = (customer, property, value) => {
    let i = this.state.customers.findIndex((customerx) => {
      return customer._id === customerx._id;
    });
    let customers = [...this.state.customers];
    let x = customers[i];
    x[property] = value;
    this.setState({ customers });
  };
  onPageChange = (currentPage) =>{
 this.setState({currentPage});
  }

  render() {
    let { activeCustomers, itemCount } = this.filter();
    if(!activeCustomers) return null;
    return (
      <>
        <Routes>
          <Route
            path="/AllCustomers"
            element={
              <AllCustomers
                customers={activeCustomers}
                Packages={this.state.packages}
                onPackageFilter={this.onPackageFilter}
                selectedPackage={this.state.currentPackage}
                onValueChange={this.editCustomer}
                onPageChange = {this.onPageChange}
                onSave={this.saveCustomer}
                itemCount= {itemCount}
              />
            }
          />
          <Route path="/EditCustomers/:id" element={<EditCustomer />} />
          <Route path="/storeCustomer" element={<CreateCustomer />} />
          <Route path="/BillInvoice" element={BillInvoice} />
        </Routes>
      </>
    );
  }

  filter() {
    let activeCustomers = this.props.Search
      ? filter(this.state.customers, this.props.Search, "Name")
      : this.state.customers;
    activeCustomers =
      this.state.currentPackage.Name.trim() === "All Packages"
        ? activeCustomers
        : filter(
          activeCustomers,
          this.state.currentPackage.Name,
          "Package",
          "Name"
        );
    const itemCount = activeCustomers?activeCustomers.length :0;
    activeCustomers = activeCustomers ? activeCustomers.slice(4 * (this.state.currentPage - 1), 4 * (this.state.currentPage - 1) + 4):null;
    return { activeCustomers, itemCount };
  }
}

export default Customers;
