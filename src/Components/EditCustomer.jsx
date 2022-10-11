import React, { Component } from "react";
import FormElement from "./SmallerComponents/EachFormElement";
import DropDown from "./SmallerComponents/dropdown";
import Table from "./TableBill";
import { useParams } from "react-router";
import customerService, {
  getPackages,
  saveCustomer,
} from "../Services/customerService";
import { toast } from "react-toastify";
import Utility from "../Utility/Utility";
const withParams = (Component) => {
  return (props) => <Component {...props} params={useParams()} />;
};
class EditCustomer extends Component {
  state = {
    customer: {
      Package:{},
      MonthlyCost:[],
      PPPOeId:[],
      PaymentDue:0
    },
    packages: [{ Name: "BASIC", _id: "123dc", MonthlyCost: 1250 }],
  };
  async componentDidMount() {
    const customers = await customerService(this.props.params.id, "_id");
    this.setState({ customer: customers[0] });
    this.setState({ packages: await getPackages() });
  }
  onPackageChoose = async (e) => {
    let customer = { ...this.state.customer };

    customer.Package = this.state.packages.filter(
      (opt) => opt.Name.trim() === e.target.value.trim()
    )[0];

   await this.setState({ customer });
  };
  onValueChange =async (lit, e) => {
    let customer = { ...this.state.customer };
    customer[lit] = e.target.value;
    await this.setState({ customer });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let customer = { ...this.state.customer };
    Utility(customer);
    await  this.setState({ customer });
    
    await saveCustomer(this.state.customer);
  
    toast("Saved Successfully !!!");
    setTimeout(() => {
      
    }, 4000);
    window.location="/AllCustomers"
  };
  onNewMonthlyCost = () => {
    const obj = {
      Cost: this.state.customer.Package.MonthlyCost,
      PayedAmount: 0,
      DateofPayment: new Date(),
    };
    let customer = { ...this.state.customer };
    customer.MonthlyCost.push(obj);
    this.setState({ customer: customer });
  };
  onMonthlyCostChange = async (property, e, id) => {
    let customer = { ...this.state.customer };
    customer.MonthlyCost[id - 1][property] = e.target.value;
    
   await  Utility(customer);
 
    this.setState({ customer });
  };
  onPPPOeIdChange = (e, index) => {
    let customer = { ...this.state.customer };
    customer.PPPOeId[index] = e.target.value;
    this.setState({ customer });
  };
  render() {
    const { customer, packages } = this.state;

    return (
      <>
        {
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
                value={customer.Name}
              />
              <DropDown
                label="Package"
                value={customer.Package}
                Name="Package"
                list={packages}
                onChoose={this.onPackageChoose}
              />
              <FormElement
                label="Payment Due"
                Name="PaymentDue"
                type="number"
                onValueChange={(e) => {
                  this.onValueChange("PaymentDue", e);
                }}
                value={customer.PaymentDue}
              />
              <FormElement
                label="PPPOeId"
                Name="PPPOeId"
                type="text"
                onValueChange={(e) => {
                  this.onPPPOeIdChange(e, 0);
                }}
                value={customer.PPPOeId[0]}
              />
              <FormElement
                label="PPPOeId Password"
                Name="PPPOeId"
                type="text"
                onValueChange={(e) => {
                  this.onPPPOeIdChange(e, 1);
                }}
                value={customer.PPPOeId[1]}
              />

              <Table
                customer={customer}
                onNewRow={this.onNewMonthlyCost}
                onValueChange={this.onMonthlyCostChange}
              />

              <button
                className="btn btn-dark"
                onClick={(e) => this.handleSubmit(e)}
                type="Submit"
              >
                Submit
              </button>
            </form>
          </div>
        }
      </>
    );
  }
}

export default withParams(EditCustomer);
