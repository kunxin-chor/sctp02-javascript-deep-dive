const prompt = require('prompt-sync')();

// So a function can return a reference
// to another function
function calculateBMIUsingMetric(w,h){
    return w/h**2;
}

function calculateBMIUsingImperial(w,h) {
    return w/h**2*703;
}

function getBMICalculator(option) {
    if (option == "m") {
        return calculateBMIUsingMetric;
    }
    if (option=="i") {
        return calculateBMIUsingImperial;
    }
}

let option = prompt("Do you want to use (m)etric or (i)mperial units? ");
const calculateBMI = getBMICalculator(option);
const bmi = calculateBMI(77, 1.71);