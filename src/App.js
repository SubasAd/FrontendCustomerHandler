import React, { Component } from "react";
import  { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Register from './Components/Register'
import NavBar from "./Components/SmallerComponents/navbar";
import Customers from "./Components/CustomerHandler";

import LoginForm from "./Components/login";
import PackageWriter from "./Components/Packages";
import EditPackage from "./Components/EditPackage";
class App extends Component {
 
  state= {
    Search : ""
  }
  onSearch=(value) =>{
    this.setState({Search : value.target.value});
  }

  render() {
    
      
    return (
      <div>
        <NavBar onSearch= {this.onSearch} Search = {this.state.Search}/> 
        <Customers Search={this.state.Search}/>
        <div className="content">
         
       <Routes>
      <Route path="/login" element ={<LoginForm/>}/>
      <Route path="/Register" element={<Register/>}/> 
      <Route path = "/Packages" element={<PackageWriter/>}/>
      <Route path = "/package/:id" element={<EditPackage/>}/>
       </Routes>
           
         
          
        

        </div>
      </div>
       
       
       
       );
    
  }
}

export default App;
