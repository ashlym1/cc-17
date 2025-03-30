// Task 1: Create a  Customer class 
class Customer {
    constructor(name, email) {
      this.name = name; // customer's  name
      this.email = email; // customer's email
      this.purchaseHistory = []; // an empty array to store purchases
    }
  
    // this  will add a purchase to the array
    addPurchase(amount) {
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
  
  // **NOTE TO SELF:  test case creating a customer to test if it works
  const customer1 = new Customer("Jenny  luna ", "luna@miffyshop.com");
  
  // adding purchases
  customer1.addPurchase(140);
  customer1.addPurchase(80);
  
  // logging customer info
  console.log("New customer created:", customer1.name);
  console.log("Total spent by Jenny Luna:", customer1.getTotalSpent());
  