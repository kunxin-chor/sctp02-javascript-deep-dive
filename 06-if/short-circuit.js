function foo() {
    console.log("foo");
    return true;
}

function bar() {
    console.log("bar");
    return false;
}

function foobar() {
    console.log("foobar");
    return true;
}

// LOGICAL AND SHORT CIRCUIT
console.log("foo() && bar() && foobar() =>", foo() && bar() && foobar());

// LOGICAL OR SHORT CIRCUIT
console.log("true || bar() || foobar() =>", foo() || bar() || foobar());