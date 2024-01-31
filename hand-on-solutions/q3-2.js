/*
# Instructions  

 Using the `prompt` function, ask the user to enter a number. You can assume that the user will enter an integer number.

 If the number is divisible by 2, display the text "apples". 
 If it is divisble by 3, display the text "oranges". 


 ## Sample
 ```
 Enter a number: 2
 apples
 ```

```
 Enter a number: 3
 oranges
```
*/
const prompt = require('prompt-sync')();
let number = parseInt(prompt("Please enter a number:"));
if (number % 2 == 0) {
    console.log("apples")
} 
if (number % 3==0){
    console.log("oranges");
}