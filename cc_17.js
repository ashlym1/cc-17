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
  const customer1 = new Customer("Jenny Luna", "luna@miffyshop.com");

  
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
  console.log("Client total spent (Jenny Luna):", rep1.getClientTotal("Jenny Luna"));

  
// Task 3: Creating the VIPCustomer class 

// VIPCustomer will extend from the regular Customer class
class VIPCustomer extends Customer {
    constructor(name, email, vipLevel) {
      super(name, email); // get's the email and name from base class 
      this.vipLevel = vipLevel; // Gold or Platinum(new VIP property)
    }
  
    //Override Method: to add a 10% loyalty bonus
    getTotalSpent() {
      let total = super.getTotalSpent(); // get the regular total
      let bonus = total * 0.10; // 10% loyalty bonus
      return total + bonus;
    }
  }
  
  //  making a VIP customer
  const vip1 = new VIPCustomer("Ruby Cellest", "ruby@miffyvip.com", "Platinum");
  
  // adding her VIP purchases
  vip1.addPurchase(600);
  vip1.addPurchase(300);
  
  // logging her total with bonus
  console.log("VIP Customer:", vip1.name);
  console.log("Status:", vip1.vipLevel);
  console.log("Total spent with loyalty bonus:", vip1.getTotalSpent());
  
  // Task 4: Building a client report system ; Creating multiple cutomers ( regula + VIP) + sales rep
  // New customers 
  const customer2 = new Customer("Sunny Smith ", "sunny@shop.com");
  customer2.addPurchase(150);
  customer2.addPurchase(75);

  const vip2 = new VIPCustomer("Clara Reyes ", "clara@vip.com", "Gold");
  vip2.addPurchase(800);
  vip2.addPurchase(100);

  const customer3 = new Customer("Valentina Gonzalez  ", "Vale@shop.com");
  customer3.addPurchase(100);
  customer3.addPurchase(75);

  const vip3 = new VIPCustomer("Lenny Brown ", "Lenny a@vip.com", "Gold");
  vip3.addPurchase(900);
  vip3.addPurchase(200);
  
  // adding the customers to the rep from before 
  rep1.addClient(customer2);
  rep1.addClient(vip1); // 
  rep1.addClient(vip2);
  
  // create an array of all customers (regular + VIP)
  const allClients = rep1.clients;
  
  // Step1: calculated the  total revenue using .reduce()
  let totalRevenue = allClients.reduce(function (sum, customer) {
    return sum + customer.getTotalSpent();
  }, 0);
  
  // step 2; this finds the  customers who spent over $500 using .filter()
  let bigSpenders = allClients.filter(function (customer) {
    return customer.getTotalSpent() > 500;
  });
  
  // Step 3.  using .map to create an array out of  names and total spent
  let customerSummary = allClients.map(function (customer) {
    return {
      name: customer.name,
      totalSpent: customer.getTotalSpent()
    };
  });
  
  // Last step : log everything 
  console.log(" Total Revenue from All Clients:", totalRevenue);
  console.log(" Customers Who Spent Over $500:", bigSpenders);
  console.log(" Client Spending Summary:");
  console.log(customerSummary);