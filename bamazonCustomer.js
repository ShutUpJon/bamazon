//Dependancies
var mysql = require('mysql')
var inquirer = require('inquirer')
var Table = require('cli-table')

//Connection
var connection = mysql.createConnection({
     host: "localhost",
     port: 3306,
     user: "root",
     password: "password",
     database: "Bamazon"

});

//Display Table
function displayAll() {
     connection.query('SELECT * FROM Products', function (err, res) {
          if (err) { console.log(err) };

          var displayTable = new Table({
               head: ['Item ID', 'Product Name', 'Category', 'Price', 'Quantity'],
               colWidths: [10, 30, 18, 10, 14]
          });

          for (var x = 0; x < res.length; x++) {
               displayTable.push(
                    [res[x].ItemID, res[x].ProductName, res[x].DepartmentName, res[x].Price, res[x].StockQuantity]
               );
          }
          console.log(displayTable.toString());
          inquireForPurchase();
     });
}; //End Display Table

function inquireForPurchase() {
     inquirer.prompt([
          {
               name: "ID",
               type: "input",
               message: "What Item Would You Like to Puchase?"
          },
          {
               name: "Quantity",
               type: "input",
               message: "How Many Would You Like to Buy?"
          }
     ]).then(function (answers) {
          var quantityNeeded = answers.Quantity;
          var IDNeeded = answers.ID;
          purchaseFromDatabase(IDNeeded, quantityNeeded);
     });
}// End of Purchase

function purchaseFromDatabase(ID, quantityAvail) {
     connection.query("SELECT * FROM Products WHERE ItemID = " + ID, function (err, res) {
          if (err) { console.log(err) };

          if (quantityAvail <= res[0].StockQuantity) {
               var totalCost = res[0].Price * quantityAvail;

               console.log("We Have That Item and Quantity Available. Order Processing!");
               console.log("Your Total Today For " + quantityAvail + " " + res[0].ProductName + " is " + totalCost + ". Thank You For Shopping at Bamazon!");

               connection.query("UPDATE Products SET StockQuantity = StockQuantity - " + quantityAvail + " WHERE ItemID = " + ID);

          } else {
               console.log("We're Sorry. We Do Not Have Enough " + res[0].ProductName + " to Fullfill Your Order.");
          };
          displayAll();
     });
} //End Database

displayAll();

