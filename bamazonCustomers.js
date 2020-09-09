var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Paradise1",
    database: "bamazon_db"
});

// MySQL connection function
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    // Should add welcome prompt asking customer whether they would like to buy or exit/just looking
    showInventory();
});

// Function to show all items available in the bamazon database
function showInventory() {
    connection.query("SELECT * FROM Products", function (err, data) {
        if (err) throw err;

        console.log();
        console.log("--------------------------------------- Welcome To BAMAZON ----------------------------------------------------");
        console.log("--------------------------------------------------------------------------------------------------------------------");
        for (var i = 0; i < data.length; i++) {
            console.log("Item ID: " + data[i].item_id + " | " + "Product Name: " + data[i].product_name + " | " + "Department Name: " + data[i].department_name + " | " + "Price: " + data[i].price + " | " + "Stock Quantity: " + data[i].stock_quantity);
            console.log("---------------------------------------------------------------------------------------------------------------");
        }

        custyChoice();

    })
};

// User prompts no particular order:
function custyChoice() {
    inquirer.prompt([
        {
            type: "list",
            message: "Please choose an option:",
            choices: ["Would you like to buy something?", "No thanks, just looking."],
            name: "bye"
        }
    ]).then(function (answer) {
        if (answer.bye === "No thanks, just looking.") {
            connection.end();
        } else {
            selectedId();
        }
    })
};


function selectedId() {
    inquirer.prompt([
        {
            type: "input",
            message: "What would you like to buy?",
            name: "id"
        },
        {
            type: "input",
            message: "How many units would you like to purchase?",
            name: "howmany"
        }
    ])
}