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
        console.log("--------------------------------------------------------------------------------------------------------------------")
        for (var i = 0; i < data.length; i++) {
            console.log("Item ID: " + data[i].item_id + " | " + "Product Name: " + data[i].product_name + " | " + "Department Name: " + data[i].department_name + " | " + "Price: " + data[i].price + " | " + "Stock Quantity: " + data[i].stock_quantity);
            console.log("---------------------------------------------------------------------------------------------------------------");
    }

    custyChoice();

    })
};

// User prompts no particular order:
function custyChoice () {
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
}

// function selectedId () {
//     inquirer.prompt([
//         {
//             type: "number",
//             message: "What would you like to buy?",
//             name: "idNum"
//         },
//         {
//             type: "number",
//             message: "How many units would you like to purchase?",
//             name: "amount"
//         }
//     ]).then(function (answers) {
//         if (isNaN(answers.idNum) || isNaN(answers.amount)) {
//             console.log("--------------------\nOne of your entries was not a number. Please try again.\n--------------------");
//             askCustomer();
//         } else {
//             connection.query("SELECT * FROM products WHERE ?", { id: answers.idNum }, function (err, res) {
//                 if (err) throw err;
//                 var pickedItem = res;

//                 if (answers.amount > pickedItem[0].stock_quantity) {
//                     console.log("--------------------\nInsufficient quantity. Please try again.\n--------------------");
//                     askCustomer();
//                 } else {
//                     reduceStock(pickedItem, answers.amount);
//                 }
//             });
//         }
//     });
// }



// var itemIDPrompt = {
//     type: "input",
//     message: "Please enter the ID of the product you would like to buy.",
//     name: "purchase_id"
// };
// var quantityPrompt = {
//     type: "input",
//     message: "How many units would you like?",
//     name: "item_quantity"
// };
// var restartPrompt = {
//     type: "list",
//     message: "Would you like to purchase anything else?",
//     choices: ["Yes", "No"],
//     name: "restart_prompt"
// };


