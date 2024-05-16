import inquirer from "inquirer";
import { emitKeypressEvents } from "readline";

let myBalance = 10000;
let myPinCode = 4278;

// Enter Pin Code
let pinAnswer = await inquirer.prompt([
  {
    name: "Pincode",
    message: "Enter your pin code",
    type: "number",
  },
]);
// console.log(pinAnswer.Q1);

// Check Pin Code
if (pinAnswer.Pincode === myPinCode) {
  console.log("Correct pin code");
  let amount = await inquirer.prompt([
    {
      name: "operators",
      type: "list",
      message: "select one option",
      choices: ["withdraw", "Deposit", "Check balance", "Fast Withdraw", ],
    },
  ]);
  console.log(amount.operators);

  // Withdraw
  if (amount.operators === "withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter amount to withdraw",
      },
    ]);
    myBalance -= amountAns.amount;
    console.log(`"Your remaining balance is:" ${myBalance} `);
  }
// Deposit
  else if (amount.operators === "Deposit") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Enter amount to Deposit",
      },
    ]);
    myBalance += amountAns.amount;
    console.log(`"Your remaining balance is:" ${myBalance} `);
  }

//   Check balance
  else if(amount.operators === "Check balance"){
    console.log("your current balance is " + myBalance)
  }

//   FastWithdraw
else if(amount.operators === "Fast Withdraw"){
    let amountAns = await inquirer.prompt([
      {
          name: "Fastopt",
          type: "list",
          message: "select one option",
          choices: ["1000", "2000", "5000", "10000", ],
      }
    ])
    if (amountAns.Fastopt === "1000") {
        myBalance -= amountAns.Fastopt
        console.log("Your amount has been withdraw &");
        
        console.log(`"Your remaining balance is:" ${myBalance} `);
        
    }
    else if (amountAns.Fastopt === "2000") {
        myBalance -= amountAns.Fastopt
        console.log("Your amount has been withdraw &");
        console.log(`"Your remaining balance is:" ${myBalance} `);
        
    }
   else  if (amountAns.Fastopt === "5000") {
        myBalance -= amountAns.Fastopt
        console.log("Your amount has been withdraw &");
        console.log(`"Your remaining balance is:" ${myBalance} `);
        
    }
    else if (amountAns.Fastopt === "10000") {
        myBalance -= amountAns.Fastopt
        console.log("Your amount has been withdraw &");
        
        console.log(`"Your remaining balance is:" ${myBalance} `);
    }
}
} else {
  console.log("Incorrect pin node");
}
