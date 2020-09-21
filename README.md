# WELCOME TO DSM'S BAMAZON!

Bamazon is an Amazon-like storefront application with the MySQL. The app will take in orders from customers and deplete stock from the store's inventory.

# Commands
```
cd into keys.js
```

*<h3>Enter your credentials in order to connect to mySQL workbench:*


```
var connection = mysql.createConnection({
    
    host: "localhost",

    // Your port; if not 3306
    port: 3306,
    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_db"
});
```
```
npm i 
```
```
node bamazonCustomers.js
```
*<h3>User uses arrow key in order to highlight desired product & enter to selcted listed product:*

![SelectedProduct](https://user-images.githubusercontent.com/62487890/93820645-767e3f80-fc2b-11ea-8bda-f1d49e8a4292.png)

*<h3>Sweat Shorts are selected followed by a prompt to the user requested desired amount:*

![SSAmount](https://user-images.githubusercontent.com/62487890/93820753-9ada1c00-fc2b-11ea-8f61-651e7b2ce550.png)

*<h4>Total amount for selected product is displayed with prompt to continue shopping. If user chooses "No" the store closes:*

![LastPairSS](https://user-images.githubusercontent.com/62487890/93820633-72522200-fc2b-11ea-9bab-c85091464a19.png)

*<h4>Since that was the last pair of swear shorts available, when another user enters the store, sweat pants is not an option due to lack of inventory:*
![86SS](https://user-images.githubusercontent.com/62487890/93820620-6d8d6e00-fc2b-11ea-8c93-f57d5152f10b.png)
*<h4>Wifi extender was selected, total amount shown, continue shopping prompt displays, connection ends:*
![WIFIPCA](https://user-images.githubusercontent.com/62487890/93820588-62d2d900-fc2b-11ea-9671-9a50296d5786.png)
