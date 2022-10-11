
import {filter} from '../Utility/Utility';
import axios from 'axios';

import {toast} from 'react-toastify';
axios.defaults.baseURL=process.env.REACT_APP_API_URL;
export  async function getPackages(value,property1,property2)
{

  axios.interceptors.request.use(
    config => {
      config.headers['x-auth-token'] = localStorage.getItem('x-auth-token');
          return config;
      },
      error => {
        toast('Error Check if you are logged in ');
          return Promise.reject(error);
      }
  );
  axios.interceptors.response.use(null, failure => {toast(failure.response.data)})
  try {
	
	   const  res=  await axios.get("/packages");
     if(res.status === 200  && property1) return  filter(res.data,value,property1,property2);
  else if(res.status === 200 && !property1) return res.data;
	   
     
	  
} catch (error) {
  toast('Error', error.response);
	 console.log(error.response)
}
 
};
export default async function(value,property1, property2)
{ 
   


axios.interceptors.request.use(
  config => {
    config.headers['x-auth-token'] = localStorage.getItem('x-auth-token');
        return config;
    },
    error => {
      toast('Error Check if you are logged in ');
        return Promise.reject(error);
    }
);

try{
  const res = await axios.get("/customers");
  if(res.status === 200  && property1) return  filter(res.data,value,property1,property2);
  else if(res.status === 200 && !property1) return res.data;
 else 
 { 
  toast( res.data)
 return null;
 }
}
catch(ex)
{

}


       
    
};
export const  saveCustomer =async (customer)=> {
  let res;
     if(customer._id) {
      res = await axios.put( "/customers/"+customer._id, customer);
      console.log(res)
     }
     else{
       res =  await axios.post( "/customers" , customer);
      
     }
      
     return res;
    
  }
  export const deleteCustomer = async(customer) =>{
    await axios.delete("/customers/"+customer._id);
  }
  export const savePackage = async (Package) =>{
    let res ;
    if(Package._id) {
      res = await axios.put( "/packages/"+Package._id, Package);
      console.log(res)
     }
     else{
       res =  await axios.post( "/packages" , Package);
      
     }
     return res;
  };
  export const  register =async (user)=> {
    
      await axios.post( "/users/register" , user);
     
    
   
 }