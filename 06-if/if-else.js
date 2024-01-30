// This only WORKS if you run this code with `node.js`
// NodeJS code doesn't have a document object

const prompt = require('prompt-sync')();

let numberOfAdults = parseInt(prompt("Enter the number of adults: "));
let numberOfChildren = parseInt(prompt("Enter the number of children: "));
let isWeekend = prompt("Is it a weekend? (y/n): "); 
let amountToPay = 0;

// if (cond is true>) <do something> else <do something else>
if (isWeekend == 'y') {
    amountToPay = numberOfAdults * 10 + numberOfChildren * 5;
} else {
    amountToPay = numberOfAdults * 4 + numberOfChildren * 1.5;
}
console.log("Total Amount to Pay =", amountToPay);