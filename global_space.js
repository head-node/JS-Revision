var a = 10;
function b() {
    var x = 10;
}

console.log(window.a); // 10

// if we dont provide any thing before x, it will be searched in the global space i.e window object
console.log(x); // ReferenceError: x is not defined, because x is not defined in the global space

console.log(this.a) // 10 because this refers to the global object which is window in the browser in global space