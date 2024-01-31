/*
# Instructions  

 In this lesson, you will try to complete a program by filling in the missing comparison operators. You must complete this question by **only replacing the ????** and not changing anything else.

  ## Tasks

  1. The program only recongizes one user right now:
  ```
  username: charilebrown
  password: goodgrief
  ```
2. Complete the _if_ statement that checks for the correct username and password.
3. The program will then ask for the user to provide a month of the year, represented as an integer. The input must be between 1 to 12. Complete the _if_ statement that checks if the given month is valid.
*/
const prompt = require('prompt-sync')();
let username;  
let password;

username = prompt("Enter you username: ");
password = prompt("Enter your password: ");

if (username == "charilebrown") {
  if (password == "goodgrief") {
    console.log("Welcome back, charilebrown");
  }

  let month = parseInt(prompt("Please enter the month (1 to 12):"))
  if (month >= 1 && month < 13) {
    console.log("Valid month is given:")
  }
}