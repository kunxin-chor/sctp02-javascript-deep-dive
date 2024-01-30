// I want a button such that
// when it is clicked,
// all the <li> will have background color
// yellow

// an event handler: a function that is called
// because of an event (known as a callback function)
function onStyleButtonClick() {
 // querySelector selects only the first match
 // querySelecorAll selects as many as possible
 let items = document.querySelectorAll("#food li");
 console.log(items);
 // items is an array, so if we want to set the background
 // color of each li individually, we must use the index
 

 // Using While:
 // let i = 0;
//  while (i < 4) {
//     items[i].style.backgroundColor = "yellow";
//     i++;
//  }

    // Using for:
    // for (let i =0; i < items.length; i++) {
    //     items[i].style.backgroundColor = "yellow";
    // }

    // Using for...of
    for (i of items) {
        i.style.backgroundColor = "yellow";
    }
}

// 1. use querySelector to select the element
// 2. then modify the element
let btn = document.querySelector("#styleBtn");
btn.addEventListener("click", onStyleButtonClick);

