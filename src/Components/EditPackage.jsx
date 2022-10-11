import React, { Component } from "react";
import FormElement from "./SmallerComponents/EachFormElement";

import { useParams } from "react-router";
import customerService, {
  getPackages,
  savePackage,
} from "../Services/customerService";
import { toast } from "react-toastify";

const withParams = (Component) => {
  return (props) => <Component {...props} params={useParams()} />;
};
class EditCustomer extends Component {
  state = {
    packagex: {
     Name:" ",
     MonthlyCost:0
    },
    packages: [{ Name: "BASIC", _id: "123dc", MonthlyCost: 1250 }],
  };
  async componentDidMount() {
    const packages = await getPackages(this.props.params.id, "_id");
    console.log(packages);
    this.setState({ packagex: packages[0] });
    this.setState({ packages: await getPackages() });
  }
  
  onValueChange =async (lit, e) => {
    let packagex = { ...this.state.packagex };
    packagex[lit] = e.target.value;
    await this.setState({ packagex });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let packagex = { ...this.state.packagex };
   
    await  this.setState({ packagex });
    
    await savePackage(this.state.packagex);
  
    toast("Saved Successfully !!!");
    setTimeout(() => {
      
    }, 4000);
    window.location="/AllCustomers"
  };
  
  
  
  render() {
    const { packagex, packages } = this.state;

    return (
      <>
        {
          <div className="container-sm w-80">
            <form>
              <FormElement
                label="Name"
                Name="Name"
                type="text"
                placeholder="Enter Name of package"
                onValueChange={(e) => {
                  this.onValueChange("Name", e);
                }}
                value={packagex.Name}
              />
             
              
              
              <FormElement
                label="Monthly Cost"
                Name="MonthlyCost"
                type="Number"
                onValueChange={(e) => {
                    this.onValueChange("MonthlyCost", e);
                }}
                value={packagex.MonthlyCost}
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
