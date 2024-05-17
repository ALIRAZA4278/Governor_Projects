#!/usr/bin/env node

import inquirer from "inquirer";

// Declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answers: {
    Sentence: string
}= await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Sentence: "
    }
])

const words = answers.Sentence.trim().split(" ")
console.log(words)

// Print the word count of the sentence to the console
console.log('your sentence word count is ${words.length}');
