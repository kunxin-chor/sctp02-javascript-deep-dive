function foobar() {
    console.log("foobar");

}

// it is possible to assign
// the reference to a function
// in a variable
let x = foobar;
x(); // <-- will output "foobar"