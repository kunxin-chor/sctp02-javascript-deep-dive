const prompt = require('prompt-sync')();

while(true) {
    let number1 = parseInt(prompt("Please enter the first number: "));
    let number2 = parseInt(prompt("Please enter the second number: "));
    // see if the user enters any zeroes for number 1 or number 2
    if (number1 ==0 || number2==0) {
        break; // exit the while loop
    } else {
        console.log(number1 + number2);
    }
}
console.log("Program ends");