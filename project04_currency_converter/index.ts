#!/usr/bin/env node
import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice.js";

const currency: any = {
  USD: 1, //base dollar currency
  Euro: 0.94,
  GBP: 0.8,
  INR: 83.61,
  PKR: 277,
};

let user_answer = await inquirer.prompt([
  {
    name: "from",
    type: "list",
    message: "Enter from currency",
    choices: ["USD", "Euro", "GBP", "INR", "PKR"],
  },
  {
    name: "to",
    type: "list",
    message: "Enter to currency",
    choices: ["USD", "Euro", "GBP", "INR", "PKR"],
  },
  {
    name: "amount",
    type: "number",
    message: "Enter your amount",
  },
]);
//   console.log(user_answer);

let fromAmount = currency[user_answer.from]; //exchnge rate
let toAmount = currency[user_answer.to]; //exchnge rate
let amount = user_answer.amount;
let baseAmount = amount / fromAmount; //USD BASE CURRENCY  1000/1 usd
let convertedAmount = baseAmount * toAmount;
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
console.log(convertedAmount);
