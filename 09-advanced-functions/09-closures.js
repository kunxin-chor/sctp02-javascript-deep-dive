let names = [
    "Tony Stark",
    "Peter Parker",
    "Steve Rogers",
    "Scarlet Witch",
    "Vision"
]

let funcs = [];

// list rendering
for (let n of names) {
    // 1. select the div#superheroes
    let superHeroesDiv = document.querySelector("#superheroes");
    // 2. create a new button = <button></button>
    // the newly created element is not in the DOM
    // meaning - not part of the HTML document
    let newButton = document.createElement("button");
    // setting the value attribute of the button
    newButton.value = n;
    newButton.innerHTML = n;

    let f = function(){
        alert(n);
    };

    funcs.push(f);

    // add an event listner to button
    newButton.addEventListener("click", f);

    // add the newButton as a children element of superheroesDiv
    superHeroesDiv.appendChild(newButton);
    
        
}

console.dir(funcs);