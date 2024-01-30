function onCalculateButtonClick() {
    // 2. INPUT: Get the inputs
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;
    weight = parseFloat(weight);
    height = parseFloat(height);
    const bmi = weight / height ** 2;
    const outputDiv = document.querySelector("#output");
    let weightCategory = "";
    if (bmi < 18.5) {
        weightCategory = "underweight";
        // add the alert-danger class to the output 
        outputDiv.classList.add("alert-danger");
    } else if(bmi <= 25) {
        weightCategory = "normal"
        // add the alert-success class to the output
        outputDiv.classList.add("alert-success");
    } else if(bmi <= 30) {
        weightCategory = "overweight";
        // add the alert-warning class to the output
        outputDiv.classList.add("alert-warning");
    } else {
        weightCategory = "obese";
        // add the alert-danger class to the output
        outputDiv.classList.add("alert-danger");
    }
  

    outputDiv.innerHTML = "Your BMI is " + bmi + " and you are considered to be " + weightCategory;
    outputDiv.style.display = "block";
}

// 1. EVENT: Define the Event
const button = document.querySelector("#calculateBtn");
button.addEventListener("click", onCalculateButtonClick);

const outputDiv = document.querySelector("#output");
outputDiv.style.display = "none";