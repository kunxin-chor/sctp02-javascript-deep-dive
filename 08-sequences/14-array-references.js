function foobar(x) {
    x = x + 10
}

function foo(names) {
    names.push("Cindy");
}

let x = 100;
// x is passed by VALUE
foobar(x);
console.log(x);

let names = ['Nancy', 'Abel', 'Ben'];
// names is being passed by REFERENCE
foo(names);
console.log(names);