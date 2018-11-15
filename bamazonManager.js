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
          inquireForUpdates();
     });
}; //End Display Table

function inquireForUpdates() {
     inquirer.prompt([
          {
               name: "action",
               type: "list",
               message: "Choose An Option Below to Manage Your Store",
               choices: ["Restock Inventory", "Add New Product", "Remove Existing Product"]
          }
     ]).then(function (answers) {
          switch (answers.action) {
               case "Restock Inventory":
                    restockRequest();
                    break;

               case "Add New Product":
                    addRequest();
                    break;

               case "Remove Existing Product":
                    removeRequest();
                    break;
          }
     });
};//End Updates

function restockRequest() {
     inquirer.prompt([
          {
               name: "ID",
               type: "input",
               message: "What Item Number Do You Wish to Restock?"
          },
          {
               name: "Quantity",
               type: "input",
               message: "How Many Units Would You Like to Add?"
          },
     ]).then(function (answers) {
          var quantityAdded = answers.Quantity;
          var productID = answers.ID;
          restockDatabase(productID, quantityAdded);
     });
};//End Restock

function restockDatabase(id, quant) {
     connection.query("SELECT * FROM Products WHERE ItemID = " + id, function (err, res) {
          if (err) { console.log(err) };
          connection.query("UPDATE Products SET StockQuantity = StockQuantity + " + quant + " WHERE ItemID = " + id);
          displayAll();
     });
};//End restockDatabase

function addRequest() {
     inquirer.prompt([
          {
               name: "Name",
               type: "input",
               message: "What New Item Would You Like to Add?"
          },
          {
               name: "Category",
               type: "input",
               message: "In What Category Would You Like to Place This Item?"
          },
          {
               name: "Price",
               type: "input",
               message: "How Much Would You Like to Sell This Item For?"
          },
          {
               name: "Quantity",
               type: "input",
               message: "How Many Units Would You Like to Add?"
          }
     ]).then(function (answers) {
          var name = answers.Name;
          var category = answers.Category;
          var price = answers.Price;
          var quantity = answers.Quantity;
          buildNewItem(name, category, price, quantity);
     });
};//End Add Request

function buildNewItem(name, category, price, quantity) {
     connection.query('INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity) VALUES("' + name + '","' + category + '",' + price + ',' + quantity + ')');
     displayAll();
};//End New Item

function removeRequest() {
     inquirer.prompt([
          {
               name: "ID",
               type: "input",
               message: "What Item ID Would You Like to Remove?"
          }
     ]).then(function (answers) {
          var id = answers.ID;
          removeFromDataBase(id);
     });
};//End removeRequest

function removeFromDataBase(id) {
     connection.query("DELETE FROM Products WHERE ItemID = " + id);
     displayAll();
};//End removeFromDatabase

displayAll();



