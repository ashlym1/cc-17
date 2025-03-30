// Task 1: Create a  Customer class 
class Customer {
    constructor(name, email) {
      this.name = name; // customer's  name
      this.email = email; // customer's email
      this.purchaseHistory = []; // an empty array to store purchases
    }
    addPurchase(amount) {  // this  will add a purchase to the array
      this.purchaseHistory.push(amount);
    }
    // this will add up the total of what  the customer spent
    getTotalSpent() {
      let total = 0;
      // looped through the purchaseHistory array
      for (let i = 0; i < this.purchaseHistory.length; i++) {
        total += this.purchaseHistory[i];
      }
  
      return total;
    }
  }
  
  // ** Test case creating a customer to test if it works
  const customer1 = new Customer("Jenny Luna ", "luna@miffyshop.com");
  
  // adding purchases
  customer1.addPurchase(140);
  customer1.addPurchase(80);
  
  // logging customer info
  console.log("New customer created:", customer1.name);
  console.log("Total spent by Jenny Luna:", customer1.getTotalSpent());
// Result: should log the new customer and the total spent after the purchase.

//Task 2: Create a SalesRep Class 
// ceating a class for sales rep
class SalesRep {
    constructor(name) {
      this.name = name; //  name
      this.clients = []; // empty array to store customer objects
    }
  
    // this will add a customer to the list
    addClient(customer) {
      this.clients.push(customer);
    }
  
    // should be able to find a  client by name and return how much they spent
    getClientTotal(name) {
      for (let i = 0; i < this.clients.length; i++) {
        if (this.clients[i].name === name) {
          return this.clients[i].getTotalSpent();
        }
      }
  
      // if the customer isn't found
      return 0;
    }
  }
  
  //Test case: Creating a sales rep
  const rep1 = new SalesRep("Sandy Moon");
  
  // adding customer to the sales rep
  rep1.addClient(customer1); //  pulling from task 1
  
  // checking how much the customer spent through the sales rep
  console.log("Sales rep:", rep1.name);
  console.log("Client total spent (Luna Bun):", rep1.getClientTotal("Jenni Luna "));
  