// three ways to create variables
// 1. let 
// 2. const: a `const` variable cannot be reassigned to
// 3. var: is automatically hoisted to the top of its scope
let secretOfLife = 42;
const PI = 3.14; // `PI` cannot be REASSIGNED to a different value

function foobar() {
    a = a + 3;
    console.log(a);
    var a = 0; // variable declared wth `var` is available anywhere in the scope
}
foobar();