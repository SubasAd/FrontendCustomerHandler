function Utility(Customer, manage) {
  if (Customer === undefined) return console.log("Customer is not defined");;
  manageMonthlyCost(Customer, new Date(), manage);
  console.log("Here");
  console.log((Customer.MonthlyCost[0]));
  Customer.PaymentDue = getTotalPaymentDue(Customer);
  
  Customer.PaymentCleared = Customer.PaymentDue === 0;
}
function getTotalPaymentDue(Customer) {
  let sum = 0;

  Customer.MonthlyCost.forEach((element) => {
    console.log((element.cost) )
   if(parseInt(element.Cost) -element.PayedAmount >=0 || parseInt(element.Cost) -element.PayedAmount <0)
    sum +=( parseInt(element.Cost) - element.PayedAmount);
   
  });
  return sum;
}
function manageMonthlyCost(Customer, today, manage) {
  if (Customer.MonthlyCost[today.getMonth()] === undefined && manage)
    Customer.MonthlyCost[today.getMonth()].Cost = Customer.Package.MonthlyCost;
}

export default Utility;

export function Paginate(items, pageNumber, pageSize) {
  let startIndex = (pageNumber - 1) * pageSize;
  return items.slice(startIndex, startIndex + pageSize + 1);
}
export function filter(items,value, property1,property2 ) {
  return items.filter((item) =>{
    if(!property2 ) return ((item[property1].toString()).toLowerCase()).match(new RegExp('^'+value.toLowerCase()));
    return item[property1][property2].toString().match(new RegExp('^'+value));
    
    
     }
 
    
 
     );

}
export function sort(items, property) {
  return items.sort(function (item1, item2) {
    return item1[property] > item2[property];
  });
}
