// for browsers, the prompt function is available at all time
let name = prompt("Please enter your name: ");
// For console.log, the output will be in the Inspector's console
console.log("Hello", name);

// select the div#output 
// a `const` variable is one that cannot be assigned to
const output = document.querySelector("#output");
output.innerHTML = "Hello " + name;
