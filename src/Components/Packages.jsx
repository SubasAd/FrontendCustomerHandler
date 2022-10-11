import React, { Component } from "react";
import FormElement from "./SmallerComponents/EachFormElement";

import { savePackage } from "../Services/customerService";
class PackageWriter extends Component {
  state = {
    Name: " ",
    MonthlyCost: 0,
  };

  onValueChange = async (lit, e) => {
    let temp = {};
    temp[lit] = e.target.value;
    await this.setState({ ...temp });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ Name: this.state.Name.trim() });
    savePackage(this.state);
  };

  render() {
    return (
      <div className="container-sm w-80">
        <form>
          <FormElement
            label="Name"
            Name="Name"
            type="text"
            placeholder="Enter Name of Package"
            onValueChange={(e) => {
              this.onValueChange("Name", e);
            }}
            value={this.state.Name}
          />

          <FormElement
            label="Monthly Cost"
            Name="MonthlyCost"
            type="number"
            onValueChange={(e) => {
              this.onValueChange("MonthlyCost", e);
            }}
            value={this.state.MonthlyCost}
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

export default PackageWriter;
