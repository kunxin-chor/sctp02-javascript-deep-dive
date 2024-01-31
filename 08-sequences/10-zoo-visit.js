const prompt=require('prompt-sync')();

const numberOfAdults = parseInt(prompt("Enter the number of adults: "));
const numberOfChildren = parseInt(prompt("Enter the number of children"));
let totalPrice = 0;
// user suppose to type in y/n?
const isWeekend = prompt("Is it a weekend? (y/n) ");
// carter for cases:
// a. if the user types in Y, y, yes, YES, Yes, "y ", "yes ", " yes",  ==> is weekend
// otherwise treat as not weekend
if (isWeekend.toLowerCase().trim()[0] == 'y') {
    // use weekend rate
    totalPrice = numberOfAdults * 8 + numberOfChildren * 5;
} else {
    // don't use weekend rate
    totalPrice = numberOfAdults * 3 + numberOfChildren * 1.5;
}
