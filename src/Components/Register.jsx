import React, { Component } from "react";
import { register } from "../Services/customerService";
import FormElement from "./SmallerComponents/EachFormElement";
class Register extends Component {
  state  = {
    user :
    {
      Name:"",
      email:"",
      password:" "
    }
  }

  onValueChange= (lit,e)=>{
    let user = {...this.state.user};
    user[lit] = e.target.value.trim();
    this.setState({user});
  }
  render() {
    const { user } = this.state;
    const {onValueChange} = this;
    return (
      <form className="form">
        <FormElement
          Name="Name"
          type="text"
          label="Name"
          placeholder="Shiva "
          onValueChange={(e) => {
            onValueChange("Name", e);
          }}
          value={user.Name}
        />
        <FormElement
          Name="email"
          type="text"
          label="email"
          placeholder="AdhikariShiva772@gmail.com"
          onValueChange={(e) => {
            onValueChange("email", e);
          }}
          value={user.email}
        />
        <FormElement
          Name="Password"
          type="Password"
          label="Password"
          placeholder="*********"
          onValueChange={(e) => {
            onValueChange("password", e);
          }}
          value={user.password.trim()}
        />
        <button type="Submit" onClick={ async (e)=>{e.preventDefault();  await register(this.state.user)}}> Register </button>
      </form>
    );
  }
}

export default Register;
