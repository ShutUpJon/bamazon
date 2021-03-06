# Welcome to Bamazon!
## Overview

This application will let you peruse items for sale using the bamazonCustomer.js file. You can see products for sale, the quantites available for purchase, and the pricing. Prompts Guide you through the process of purchasing items.

Using the bamazonManager.js file you can add inventory, add new items, and remove items from the purchase table.

## Functionality
##### Customer App
The Customer App allows you to view items for sale and purchase them in the quantities desired. Upon launching the app you will receive a table.

![Image of Bamazon](https://github.com/ShutUpJon/bamazon/blob/master/img/addItem.jpg)
      
As you can see it will prompt you for the item(s) you would like to purchase.
Then it asks you for the quantities desired.
If the items and quantties are avaialble you'll receive a purchase confirmed message!
If the items and quantties are unavailable, you'll receive an error asking you to try again.

##### Manager App
The Manager App allows you to view your inventory, add stock, and new items, and remove items. Upon launching the app you receive the same tasble, with some different functionalilty.

![Image of Manager](https://github.com/ShutUpJon/bamazon/blob/master/img/restock.jpg)

As You can see the prompts are different for managing, adding, and removing inventory.
Restock Items - Add the number of items to restock
Add New Product - Add a New Item - Place it Into Desired Item Category - Set Your Price - Add Your Desired Stock
Remove Existing Product - Remove Items by ID Number - Item has been removed

## Technologies Used
* Node.js
* mysql
* inquirer
* cli-table
* written in JavaScript


