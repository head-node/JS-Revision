var x = 1;
a();
b();

function a() {
    var x = 10;
    console.log(x);
}

function b() {
    var x = 100;
    console.log(x);
}

// first a global execution context will be created 
// memory execution phase will be created
// x will be assigned a placeholder value of undefined in the memory phase
// a and b will be assigned a placeholder value of their function definition in the memory phase
// a and b will be hoisted to the top of the file
// a will be called
// a's execution context will be created
// memory execution phase will be created
// x will be assigned a placeholder value of undefined in the memory phase
// x will be assigned 10 in the code execution phase
// x will be logged to the console as 10
// a's execution context will be popped off the call stack
// b will be called
// b's execution context will be created
// memory execution phase will be created
// x will be assigned a placeholder value of undefined in the memory phase
// x will be assigned 100 in the code execution phase
// x will be logged to the console as 100
// b's execution context will be popped off the call stack
// the global execution context will be popped off the call stack
// desired output: 10, 100