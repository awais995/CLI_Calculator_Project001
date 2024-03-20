#!/usr/bin/env node

import inquirer from "inquirer";

// Building a Simple CLI Calculator

async function performCalculation() {
    let repeat = true;    

    while (repeat){
    let input = await inquirer.prompt([
    {
    name: "input1",
    type: "number",
    message: "Please Enter your first number",
    },
    {
        name: "operator",
        type: "list",
        message: "Please select the operator to perform your operation.",
        choices: ["+", "-", "*", "/"],
    },
    {
        name: "input2",
        type: "number",
        message: "Please enter your second number",
    }
]);

// Conditional Statements

        if (input.operator === "+"){
            console.log(input.input1 + input.input2);
        } else if (input.operator === "-"){
            console.log(input.input1 - input.input2);
        } else if (input.operator === "*"){
            console.log(input.input1 * input.input2);
        } else if (input.operator === "/"){
            console.log(input.input1 / input.input2);
        } else {
            console.log("Please Select a valid operator");
        };

        const {again} = await inquirer.prompt([
        {
            name: "again",
            type: "confirm",
            message: "Do you want to perform another operation?",
            default: true,
        }
    ]);

        repeat = again;
    }
}
performCalculation();