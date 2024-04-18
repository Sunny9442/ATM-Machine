import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 42525;
let mypin = 2002;
console.log(chalk.blue.bold("\n    Welcome Sunny World (ATM MACHINE)   \n"));
let answerpin = await inquirer.prompt([
    {
        message: chalk.red.bold("Enter your pin code"),
        name: "pin",
        type: "number",
    }
]);
if (answerpin.pin === mypin) {
    console.log(chalk.yellowBright.bold("Log in your account successfully"));
    let operation_ans = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: chalk.red.bold("Select an Operation"),
            choices: ["Withdraw Amount", "Check Balance"],
        }
    ]);
    if (operation_ans.operation === "Withdraw Amount") {
        let withdraw_ans = await inquirer.prompt([
            {
                message: chalk.yellow.bold("Select a withdrawal method"),
                name: "withdraw_method",
                type: "list",
                choices: ["Fast Cash", "Enter Amount"]
            }
        ]);
        if (withdraw_ans.withdraw_method === "Fast Cash") {
            let fast_cash = await inquirer.prompt([
                {
                    message: chalk.yellow.bold("Select Amount:"),
                    name: "fastcash",
                    type: "list",
                    choices: [500, 1000, 2000, 5000, 10000, 20000]
                }
            ]);
            if (fast_cash.fastcash > mybalance) {
                console.log(chalk.blue.bold("Insufficeint Balance"));
            }
            else {
                mybalance -= fast_cash.fastcash;
                console.log(chalk.red.bold(`${chalk.green.bold(fast_cash.fastcash)} withdraw Successfully`));
                console.log(chalk.yellow.bold(`your remaining balance is${chalk.green.bold(mybalance)}`));
            }
        }
        if (withdraw_ans.withdraw_method === "Enter Amount") {
            let amount_ans = await inquirer.prompt([
                {
                    name: "amount",
                    type: "number",
                    message: chalk.yellow.bold("Enter the amount to withdraw"),
                }
            ]);
            if (amount_ans.amount > mybalance) {
                console.log(chalk.blue.bold("Insufficeint Balance"));
            }
            else {
                mybalance -= amount_ans.amount;
                console.log(chalk.red.bold(`${chalk.green.bold(amount_ans.amount)} withdraw Successfully`));
                console.log(chalk.yellow.bold(`your remaining balance is${chalk.green.bold(mybalance)}`));
            }
        }
    }
    else if (operation_ans.operation === "Check Balance") {
        console.log(chalk.blue.bold(`your account balance is ${chalk.green.bold(mybalance)}`));
    }
}
else {
    console.log(chalk.red.bold("pin is incorrect , TRY AGAIN!"));
}
