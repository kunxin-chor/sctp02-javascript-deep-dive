/*
# Instructions  

Write a function (the name's up to you) that has two parameters, `weight` and `height`

Return the BMI calculated from the two parameters. The formula for bmi is `weight / height ** 2`

## Framework for writing a function
1. Decide on the name of the function
2. Decide on the parameters of the function
    1. The variable name of the parameters does not matter, the orders does
3. Derive the results from the parameters
4. Return the results
*/
function calculateBMI(weight, height) {
    let bmi = weight / height ** 2;
    return bmi;
}