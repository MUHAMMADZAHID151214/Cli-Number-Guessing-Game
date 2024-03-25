#! /usr/bin/env node
import inquirer from "inquirer";
// computer will generate a random number
// Take input from user
// compare user input with computer generated nummber and show result
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([{ name: "guessnum", type: "number", message: "Please Guess a Number between 1 t0 5" }]);
if (answer.guessnum === randomnumber) {
    console.log("The number you guessed is correct");
}
else {
    console.log("You guessed wrong number");
}
console.log("THE NUMBER IS " + randomnumber);
