// ask the user
// for a number
// when the user
// enters a number,
// push it to an array
// if the user gives a 0 or
// negative number, stop
// and then find the average of all
// the numbers
let numbers = [];
let num = parseInt(prompt("Enter a number: "));
while (num > 0) {
    numbers.push(num);
    num = parseInt(prompt("Enter a number: "));
}
