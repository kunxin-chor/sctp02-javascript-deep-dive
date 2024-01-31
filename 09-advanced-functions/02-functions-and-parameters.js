function hello() {
    alert("hello world");
}


let btn = document.querySelector("#button");
// in the example below, the reference to the hello
// function is being passed as the second parameter
// to the `addEventListener` function
btn.addEventListener("click", hello);