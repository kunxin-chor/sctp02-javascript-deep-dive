/*
# Instructions  

In this execrise, ask the user to enter an integer. 

* If the integer is wholly divisble by 2, display `apples`.
* If the integer is wholly divisible by 3, display `oranges`
* If the integer is not divisible by 2 and not divisble by 3, display `bananas`

Do not use any logical operators in your attempt. That is, no `&&` or `||`
*/
const prompt = require('prompt-sync')();
let n = parseInt(prompt("Enter a number"));
if (n % 2 ==0) {
    console.log("apples");
}
if (n % 3==0) {
    console.log("oranges");
}

if (n % 2 == 0) {

} else if (n % 3 ==0) {

} else {
    console.log("bananas");
}

// if (n % 2 != 0 && n % 3 !=0) {....}