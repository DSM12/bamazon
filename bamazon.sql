DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
	item_id INT NOT NULL,
    product_name VARCHAR(45) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INTEGER(100),
    stock_quantity INTEGER(100)
    
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (1, "50 inch Smart TV", "Home Entertainment", 250, 59);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (2, "Sweat Shorts", "Clothing", 35, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (3, "Toaster Oven", "Kitchen", 30, 90);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (4, "iPhone X", "Electronics", 220, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (5, "Air Fryer", "Kitchen", 60, 70);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (6, "Bluetooth Speaker Bar", "Home Entertainment", 80, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (7, "Boxing Glove Set", "Fitness", 50, 12);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (8, "Wifi Amplifier", "Electronics", 105, 46);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (9, "Graphic Tee Shirts", "Clothing", 25, 25);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (10, "DSM Pro Weight Bench", "Fitness", 125, 45);