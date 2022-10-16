import React, { Component } from "react";
import { toast } from "react-toastify";
import { deleteCustomer } from "../../Services/customerService";
class Customer extends Component {

  render() {
   

    const { customer, onValueChange,onSave } = this.props;
    if(!customer) return null;

    return (
      <tr>
        <td>{customer._id}</td>
        <td>
          <input
            className=" border-0"
            value={customer.Name}
            onChange={(e) => {
              onValueChange(customer,"Name", e.target.value);
            }}
          />
        </td>
        <td>
          
          {customer.Package.Name}
            
           
        
        </td>

        <td>
          <input
            className=" border-0"
            value={customer.Phone}
            onChange={(e) => {
              onValueChange(customer ,"Phone", e.target.value);
            }}
          />
        </td>

        <td>
          <input
            className=" border-0"
            value={customer.Adress}
            onChange={(e) => {
              onValueChange(customer,"Adress", e.target.value);
            }}
          />
        </td>

        <td>
          <input
            className=" border-0"
            value={customer.SuscribeDate}
            onChange={(e) => {
              onValueChange(customer,"SuscribeDate", e.target.value);
            }}
          />
        </td>

        <td>
          <input
            className=" border-0"
            value={customer.ConnectionDate}
            onChange={(e) => {
              onValueChange(customer,"ConnectionDate", e.target.value);
            }}
          />
        </td>
        <td className={getDay()<=2? "bg bg-danger text-bold" : "bg bg-primary"}>
          { getDay()}
        </td>

        <td>
          <input
            className="border-0"
            value={customer.PaymentDue}
            onChange={(e) => {
              onValueChange(customer ,"PaymentDue", e.target.value);
            }}
          />
        </td>

        <td>
         
            
          {customer.PPPOeId[0]}, {customer.PPPOeId[1]}
            
       
        </td>
        <td>
          <button onClick={  (e)=>{
             window.location = "/EditCustomers/"+customer._id
          }}> Open </button>
        </td>
        <td>
          <button onClick={e=> {onSave(customer)
          
          toast("Wait saving " + customer.Name)
            setTimeout(() => {
             
              window.location = "/AllCustomers" 
            }, 4000);
          
          }}> Save</button>
          
        </td>
        <td>
          <button onClick={e=>
          {deleteCustomer(customer);
            toast("Wait deleting " + customer.Name)
            setTimeout(() => {
             
              window.location = "/AllCustomers" 
            }, 4000);
          }}> delete </button>
        </td>
      </tr>
    );

    function getDay() {
      let today= new Date();
      let subscribeDate = new Date(customer.SuscribeDate);
      if( (today-subscribeDate)/(1000*60*60*24) <0 ) {
           console.log(today - subscribeDate)
        return Math.round((30+(subscribeDate -today)/(1000*60*60*24) ))
      } 
    
    
   
      return Math.round(30-(today-subscribeDate)/(1000*60*60*24));
    }
  }
}

export default Customer;
