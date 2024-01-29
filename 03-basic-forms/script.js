// define an event handler for the button click
function onCalculateButtonClick() {
    const weightInput = document.querySelector("#weight");
    // the `value` key of a `<input type="text">`
    // is what the user has typed into the textbox
    const weight = weightInput.value;
    
    const height= document.querySelector("#height").value;
    
    console.log(weight, height);

    const bmi = weight / height ** 2;

    // we cannot return a result from an event handler
    // so we can display the result in a div#output
    const output = document.querySelector("#output");
    output.innerHTML = "Your BMI is " + bmi;
}

const calculateBtn = document.querySelector("#btnCalculate");
// For the second arguments, DO NOT CALL THE FUNCTION WITH ()
calculateBtn.addEventListener("click", onCalculateButtonClick);
