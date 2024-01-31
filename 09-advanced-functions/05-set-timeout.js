function alarm() {
    console.log("REMINDER!");
}

// the first arugment/parameter:
// - the function to call after some milliseconds
// have passed
/// the second parameter: the amount of milliseconds to wait
setTimeout(alarm, 2000);
console.log("While waiting");