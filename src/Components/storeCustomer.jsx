import React, { Component } from "react";
import FormElement from "./SmallerComponents/EachFormElement";
import DropDown from "./SmallerComponents/dropdown";

import { getPackages, saveCustomer } from "../Services/customerService";
import { toast } from "react-toastify";
class CustomerWriter extends Component {
  state = {
    Name: "",
    packages: [{ Name: " item1" }, { Name: "item2" }],
    Package: { Name: "" },
    PaymentCleared: true,
    PaymentDue: 0,
    PPPOeId: "  ",
    Adress: " ",
    SuscribeDate: "",
    Phone: 0,
    MonthlyCost: [{}],
  };
  async componentDidMount() {
    try {
      this.setState({
        packages: await getPackages() ,
        Package: await this.state.packages[1],
      });
    } catch (ex) {
      console.log(ex);
    }
  }

  onValueChange = async (lit, e) => {
    let temp = {...this.state};
    temp[lit] = e.target.value;
    await this.setState({ ...temp });
  };
  onPackageChoose = async (e) => {
    console.log(e.target.value)
   const Package= this.state.packages.filter(
      (opt) => opt.Name.trim() === e.target.value.trim()
    )[0];
    console.log(Package)
    this.setState({
      Package
    });

  };

  handleSubmit =async (e) => {
    e.preventDefault();
    let { packages, ...customer } = this.state;
 console.log(customer);
  // await utility(customer);
    customer.PaymentDue =  await parseInt(customer.PaymentDue);
    customer.PPPOeId = await customer.PPPOeId.split(",");
    console.log(customer);

   const  res = await   saveCustomer(customer);
    
  toast("Customer Saved Successfully");
  setTimeout(() => {
    
  }, 4000);
  window.location = "/AllCustomers"
  };

  render() {
    return (
      <div className="container-sm w-80">
        <form>
          <FormElement
            label="Name"
            Name="Name"
            type="text"
            placeholder="Enter Name of Customer"
            onValueChange={(e) => {
              this.onValueChange("Name", e);
            }}
            value={this.state.Name}
          />
          <DropDown
            label="Package"
            value={this.state.Package}
            Name="Package"
            list={this.state.packages}
            onChoose={this.onPackageChoose}
          />
          <FormElement
            label="Payment Due"
            Name="PaymentDue"
            type="number"
            placeholder="Exclude this Month's Due"
            onValueChange={(e) => {
              this.onValueChange("PaymentDue", e);
            }}
            value={this.state.PaymentDue}
          />
          <FormElement
            label="Phone"
            Name="Phone"
            type="Number"
            placeholder="98....."
            onValueChange={(e) => {
              this.onValueChange("Phone", e);
            }}
            value={this.state.Phone}
          />
          <FormElement
            label="PPPOeId"
            Name="PPPOeId"
            type="Array"
            placeholder="[id , password]"
            onValueChange={(e) => {
              this.onValueChange("PPPOeId", e);
            }}
            value={this.state.PPPOeId}
          />
          <FormElement
            label="Adress"
            Name="Adress"
            type="Array"
            placeholder="Adress"
            onValueChange={(e) => {
              this.onValueChange("Adress", e);
            }}
            value={this.state.Adress}
          />
          <FormElement
            label="Suscribe Date"
            Name="SuscribeDate"
            type="Date Picker"
            placeholder="yyyy-mm-dd in AD "
            onValueChange={(e) => {
              this.onValueChange("SuscribeDate", e);
            }}
            value={this.state.SuscribeDate}
          />

<FormElement
            label="Connection Date"
            Name="Connection Date"
            type="Date Picker"
            placeholder="yyyy-mm-dd in AD "
            onValueChange={(e) => {
              this.onValueChange("ConnectionDate", e);
            }}
            value={this.state.ConnectionDate}
          />
          <button
            className="btn btn-dark"
            onClick={this.handleSubmit}
            type="Submit"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CustomerWriter;
