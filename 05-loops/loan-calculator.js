let loan = 30000;
let interestRate = 0.04/12; 
let repay = 1250;
let monthsToRepay = 0;
while (loan > 0) {
    let interest = loan * interestRate;
    loan += interest;
    loan - repay;
    monthsToRepay++;
}

console.log("Months to repay =", monthsToRepay);

