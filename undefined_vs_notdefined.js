console.log(a); // 
var a = 7; // it will give undefined because a is hoisted to the top of the file, undefined is placeholder value assigned to a in the memory phase



console.log(b) // ReferenceError: Cannot access 'b' before initialization, because b is not hoisted to the top of the file
// be is not assigned a memory space in the memory phase
// be is not defined, so it will give a reference error
