/*--- Create Database ---*/
CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE Products (
     ItemID INT (10) AUTO_INCREMENT NOT NULL,
     ProductName VARCHAR (50) NOT NULL,
     DepartmentName VARCHAR (50) NOT NULL,
     Price DECIMAL (10,2) NOT NULL,
     StockQuantity INT (10),
     primary key (ItemID)
);

/*--- Syntax for New Product ---*/

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('MacBook Air','Electronics',499.99,10);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('iPod','Electronics',199.99,8);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('MacBook Pro','Electronics',899.99,3);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('iPad Pro','Electronics',799.99,12);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('MacBook','Electronics',599.99,5);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('iPhone X','Electronics',399.99, 20);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('iPhone XR','Electronics',349.99, 25);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('Air Pods','Electronics',89.99, 10);

INSERT INTO Products(ProductName,DepartmentName,Price,StockQuantity) 
VALUES ('Mac Mini','Electronics',999.99, 5);