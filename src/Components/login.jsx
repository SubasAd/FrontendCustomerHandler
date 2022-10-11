import React, { Component } from "react";
import FormElement from "./SmallerComponents/EachFormElement";
import defaultjson from "../config/default.json";
import axios from "axios";

import { toast } from "react-toastify";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };
  onValueChange = async (lit, e) => {
    let temp = {};
    temp[lit] = e.target.value.trim();
    await this.setState({ ...temp });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    let user = { ...this.state };
    try {
	
	      const res = await axios.post(defaultjson.url + "/login", user);
        console.log(res);
	    localStorage.setItem("x-auth-token", res.headers["x-auth-token"]);
	    toast("Successfully Logged in");
} catch (error) {

	console.log(error)
}
    
    
  };

  render() {
    return (
      <div className="container-sm">
        <form className="w-80">
          <FormElement
            label="email"
            Name="email"
            type="email"
            placeholder="Enter email "
            onValueChange={(e) => {
              this.onValueChange("email", e);
            }}
            value={this.state.email}
          />

          <FormElement
            label="password"
            Name="password"
            type="text"
            value={this.state.password}
            placeholder="Enter Pasword"
            onValueChange={(e) => {
              this.onValueChange("password", e);
            }}
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

export default LoginForm;
