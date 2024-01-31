const prompt = require('prompt-sync')();
/*
# Instructions  

Write a program that asks the user to enter two numbers, and then display their sum. Repeat this until they enter `0` for both numbers.

Follow the instructions below to help you write this non-determinstic while loops:

1. Start the program by asking the user for two numbers.
2. Using a _if_, check the two numbers are **not** zero.
3. If the two numbers are not **zero**, calculate their sum, and ask for the next two numbers
4. Run the program. Enter two numbers, and you will be shown the sum. Enter the next two numbers. The program should ends
5. Change the _if_ to a _while_. You should be continously asked for two numbers until you enter **zero** for both numbers.
*/

let number1 = parseInt(prompt("Enter the first number: "));
let number2 = parseInt(prompt("Enter the second number: "));
while (number1 != 0 && number2 != 0) {
    let sum = number1 + number2;
    console.log(sum);
    number1 = parseInt(prompt("Enter the first number: "));
    number2 = parseInt(prompt("Enter the second number: "));
}