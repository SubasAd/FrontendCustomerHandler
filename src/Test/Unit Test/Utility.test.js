import utility,{filter} from '../../Utility/Utility';
describe("utility Test", () => {
    let customer 
    beforeEach(()=>
    {
       
  customer = {
    Name: "Shiva",
    Package: {
        Name: "Basic",
        MonthlyCost: 1250,
      },
    MonthlyCost: [],
    PaymentCleared: true,
    PaymentDue: 135
  };
    })

 

  it("should do return Customer is not defined if no customer is provided ", () => {
 customer = '';
expect(utility(customer)).toBe('Customer is not defined');
  });


  it("should add all  elements of MonthlyCost and Store in Payment Due",()=>{
    customer['PaymentDue'] = -8956;
    customer['MonthlyCost'] = [0,0, undefined ,0,25,0,0,65,45,0,0,0];
    utility(customer);
     
    expect(customer['PaymentDue']).toBe(25+65+45);


  });
  it('should overwrite Payment Cleared to false if Payment due is greater than 0',()=>{
    customer['MonthlyCost'] = [0,0,undefined ,0,25,0,0,65,45,0]
    utility(customer);
    expect(customer['PaymentCleared']).toBe(false);
  });
  it('should  overwrite PaymentCleared to be true if PaymentDue is 0',()=>{
    customer['MonthlyCost'] = [0,0,0,0,0,0,0,0,0,0];
    utility(customer);
    expect(customer['PaymentCleared']).toBe(true);
  });
 /* it("should add Price According to Package if new Month is Originated",()=>{
    
    jest.useFakeTimers().setSystemTime(new Date('February 21, 2022 01:15:00'));
    utility(customer);
    expect(customer['MonthlyCost'][1]) .toBeDefined();
 

  });
  */
  it('filter the customers based on property',()=>{
           
    const  customers =
      [  {
          _id: "123789c",
          Name:"Shiva Adhikari",
          PayedAmount: 1275,
         PaymentDue: 1535,
         SuscribeDate:new Date().toDateString(),
         Phone : 9840409379,
         Adress:"Pakhapani 7 Parbat",
          DateofPayment: new Date().toDateString(),
          Package:{
            Name:"Basic",
          },
          PPPOeId:["Shiva"," 1234 "],
         MonthlyCost:
          {
            Cost :1250,
            PayedAmount :350,
            DateofPayment: new Date().toDateString()
          }
        

        },
          {
            _id: "123789d",
            Name:"Shiva Adhikari",
            PayedAmount: 1275,
           PaymentDue: 1535,
           SuscribeDate:new Date().toDateString(),
           Phone : 9840409379,
           Adress:"Pakhapani 7 Parbat",
            DateofPayment: new Date().toDateString(),
            Package:{
                 Name:"Basic",
            },

            PPPOeId:"Shiva",
           MonthlyCost:
           [ {
              Cost :1250,
              PayedAmount :350,
              DateofPayment: new Date().toDateString()
            }
          ]
           
          }
         ]
         
         
  expect(filter (customers,"Basic",'Package','Name')[0]).toBe(customers[0]);



  })
});
