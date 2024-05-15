#! /usr/bin/env node

import inquirer from "inquirer";

// 1. computer will generate a random number
// 2. user input for guessing number0
// 3. compare user input with computer generated number and show result
let randomNumber = Math.floor(Math.random() * 6 + 1 )
console.log(randomNumber);

const answers =  await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "Please guess number between 1 - 6"
    }
])  

if (answers.userGussedNumber === randomNumber) {
    console.log("Congrats you guessed it right");  
}else{
    console.log("You guessed it wrong");        
    
}