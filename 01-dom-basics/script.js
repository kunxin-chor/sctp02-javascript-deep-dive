function changeButtonClick() {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
}

// when the change theme button is click, change to dark mode
let button = document.querySelector("#changeBtn");

// We can attach a reaction to event with `addEventListener`
// first parameter: the type of event
// second parameter: the function to call if the event happens  to that element
button.addEventListener("click", changeButtonClick);