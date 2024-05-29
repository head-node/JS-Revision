


var n = 2;
// even though the function is defined after the variable, it is hoisted to the top of the file
// so the function is available to be called before it is defined
var squareOfN = square(n);
console.log(squareOfN);
function square(num) {
    return num * num;
}

// desired output: 4