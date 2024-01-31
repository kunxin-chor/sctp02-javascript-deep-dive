const prompt = require('prompt-sync')();

let firstName = prompt("Enter first name: ");
let lastName = prompt("Enter the last name: ");
let amountOwned = parseFloat(prompt("Enter the amount: "));

// In the letter, we want to show the first name
// and last name, and also indicate if the person
// don't pay by the end of month, there will be a 10%
// charge.
console.log(`Dear ${firstName} ${lastName},

    Your bill of $${amountOwned} is due on 31st Jan 2024.

    If you do not pay by then, you will be charged an 
    additional $${0.1 * amountOwned}.

Sincerely,
Account Manager

`)
