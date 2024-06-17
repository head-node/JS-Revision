// function a() {
// console.log(b);
//     var b = 10;

//     c()
//     function c() {
//     }
// }
// a()
// console.log(b);
// console.log(a)

// let a = 10;
// var b = 100;

// if(true){
// if expects a single statement, but we can use a block statement to execute multiple statements
//     var a  = 10
//     console.log(10);
// }

// {
//     var a = 10 ;
//     let b = 20 ;
//     const c = 30;
// }

// let a = 4 ;

// function show() {
//     // let a = 5;
//     let c = 6
//     console.log(a);
// }

// show()

// const makeCounter = function () {
//     let privateCounter = 0;
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     return {
//       increment() {
//         changeBy(1);
//       },

//       decrement() {
//         changeBy(-1);
//       },

//       value() {
//         return privateCounter;
//       },
//     };
//   };

//   const counter1 = makeCounter();
//   const counter2 = makeCounter();

//   console.log(counter1.value()); // 0.
//   counter2.increment();
//   counter2.increment();
//   counter2.increment();
//   counter2.increment();

//   counter1.increment();
//   counter1.increment();
//   counter1.increment();

//   console.log(counter1.value()); // 2.

//   counter1.decrement();
//   console.log(counter1.value()); // 1.
//   console.log(counter2.value()); // 0.

// let a =5

// {
//  a = 10
// }

// console.log(a)
// function a() {
//   for (var i = 0; i < 5; i++) {
//     function returnCurrentI(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     returnCurrentI(i);
//   }
// }
// a()

// let a = 5
// console.log(a)

// function counter(){
//   let count = 0;
//   return function increment(){
//     count++;
//     console.log(count);
//   }
// }

// let counter1 = counter();
// let counter2 = new counter();

// console.log(counter1);
// console.log(counter2);
// counter1();
// counter1();

// counter2();
// counter2();

// function attachEvents() {
//   let count = 0
//   return function myFunction() {
//     console.log('I am a function', ++count);
//   }
// }

// var myFunction = attachEvents();
// let res = []
// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 25 },
//   { name: "Diana", age: 33 },
//   { name: "Ethan", age: 22 },
//   { name: "Fiona", age: 22 },
//   { name: "George", age: 33 },
//   { name: "Hannah", age: 33 },
//   { name: "Ian", age: 25 },
//   { name: "Jane", age: 22 }
// ];

// res = people.reduce((res, person) => {
//   if (!res[person.age]) {
//     res[person.age] = 1
//   }
//   else {
//     ++res[person.age]
//   }
//   return res
// },[])

// we should use the returned value from the reduce function
// curr is the current value of the array, its local to the reduce function
// we can use the initial value of the reduce function to store the result of the operation

// res = people.reduce((res, person) => {
//   if(person.age<30){
//     res.push(person.name)
//   }
//   return res
// },[])
// console.log(res);

// !function iife() {
//   var a = 10;
//   console.log(a);
// }()

// let name1 = {
//   firstName: 'John',
//   lastName: 'Doe',
//   getFullName: function () {
//     console.log(this.firstName + ' ' + this.lastName);
//   }
// }

// name1.getFullName();

// let name2 = {
//   firstName: 'Sudhanshu',
//   lastName: 'Sekhar'
// }

// // function borrowing
// name1.getFullName.call(name2);
// const button = document.querySelector('button');
// console.log(button);
// const user = {
//   name: 'Alice',
//   sayHi() {
//     console.log('Hi, ' + this.name);
//     return () => {console.log("Returned Function", name);}
//   }
// };

// button.addEventListener('click', user.sayHi.call(user)); // Outputs: Hi, Alice

// let multiple = (a,b) => {
//   return a*b
// }

// let multiplyByTwo = multiple.bind(this,2);
// console.log(multiplyByTwo(3));
// let display = () => {
//   console.log(this);
// }
// display(2)

// let sum = (a) => {
//    return function (b){
//   if(!b) return a
//     return sum(a*b)
//    }
// }

// console.log(sum(1)(2)(3)(4)());

// let object1 = {
//   name: 'John',
//   city: 'New York',
//   getIntro : function(){
//     console.log(this.name + ' from ' + this.city);
//   }
// }
// let object2 = {
//   name: 'Alice',
// }
// object2.__proto__ = object1;
// object1.getIntro(); // John from New York
// object2.getIntro(); // Alice from New York
// it took name from object2 and city from object1
// if the property is not found in object2, it will look in the prototype chain

// debobounce is like the to call a function when the delay between two keypress is more than a certain time
// let timeout

// let handleChange = (e) => {
//   clearTimeout(timeout);
//    timeout = setTimeout(() => {
//     console.log(e.target.value);
//   }, 400);
// }
// const input = document.querySelector('input')
// input.addEventListener('input', handleChange);
// input.value = 'New Value';

// const event = new Event('input');
// input.dispatchEvent(event);

// throttling is used to limit the number of times a function can be called, by calling the function only after a cetain delay has been passed
// 1) without setTimeout
// let counter = 0
// let intialTime = new Date().getTime();
// let handleClick = () => {
//   counter++
//   let currentTime = new Date().getTime();
//   if(currentTime - intialTime > 1000){
//     console.log("Clicked", counter);
//     intialTime = currentTime;
//   }
//   document.querySelector('input').value = counter;
// }
// 2) with setTimeout

//   let flag = false;
//   let counter = 0
//   let handleClick = () => {
//   counter++
//   if (!flag) {
//     console.log("Clicked", counter);
//     flag = true
//     setTimeout(() => {
//       flag = false
//     }, 1000);
//   }
//   document.querySelector('input').value = counter;
// }

// console.log("1")
// setTimeout(
//     function (){
//             console.log("2")
//     }
// ,2000)
// console.log("3")

// const cart = ["shoes", "shirts", "pants"];

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });

// apis are dependent on each other, so we have to call them in a sequence
// one call back inside another call back is called callback hell
// code starts to grow horizontally rather than vertically and becomes difficult to read 


// inversion of control can also occur here as the control of the code is in the hands of the api
// it might be that the callback is called before the previous callback is completed or 
// the callback is never called  

// const cart = ["shoes", "shirts", "pants"];

// const promise = createOrder(cart);

//   proceeedToPayment(orderId);

// const Github_API = 'https://api.github.com/users/sudhanshu-sekhar/repos';

// let user = fetch(Github_API) // fetch returns a promise
//     .then(response => response.json()) // response.json() returns a promise,
//     // so we can chain another then to handle the data
//     .then(data => {
//         console.log(data);
//     })


//  

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolved');
//   }, 12000);
// });
//  async function fetchGithubAPI() {
//   let data = await p
//   console.log(data);
// }

// fetchGithubAPI()


// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolved 1');
//   }, 10000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolved 2');
//   }, 5000);
// });
//  async function fetchGithubAPI() {
//   console.log('Fetching Github API');
//   let val1 = await p1
//   console.log('After 10 seconds');
//   console.log(val1);

//   let val2 = await p2
//   console.log('After 5 seconds');
//   console.log(val2);

// }

// fetchGithubAPI()


// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolved 1');
//   }, 5000);
// });

// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Resolved 2');
//   }, 10000);
// });
//  async function fetchGithubAPI() {
//   console.log('Hello World');
//   let val1 = await p1
//   console.log('After 5 seconds');
//   console.log(val1);

//   let val2 = await p2
//   console.log('After 10 seconds');
//   console.log(val2);

// }

// fetchGithubAPI()

// call stack -> empty initially
// after the function call, fetchGithubAPI is pushed to the call stack
// it will go line by line
// it will log 'Hello World' to the console
// it will go to the next line and see await p1, it will suspend the execution fetchGithubAPI function and will wait till p1 is resolved
// after 5 s, fetchGithubAPI will be pushed to the call stack and will log 'After 5 seconds' and 'Resolved 1'
// it will go to the next line and see await p2, it will check if p2 is resolved, it will suspend the execution of fetchGithubAPI and will wait till p2 is resolved
// after p2 is resolved, fetchGithubAPI will be pushed to the call stack and will log 'After 10 seconds' and 'Resolved 2'
// there is no blocking of call stacks, it is just that the function is suspended till the promise is resolved

// without async we need to use Promise object to create a promise
// let p1 = new Promise((resolve, reject) => {
//   resolve('Resolved 1');
// }
// );

// p1.then((data) => {
//   console.log(data);
// })

// // with async we can use the async keyword to create a promise

// async function createPromise() {
//   return "Resolved 1"
// }

// createPromise().then((data) => {
//   console.log(data);
// })

// function all(promises) {
//   // your code here
//   return result(promises)

// }

// async function result(promises){
//   let p = []
//   for(let i=0;i<promises.length;i++){
//     try{
//       let resolved = await promises[i]
//       p.push(resolved)
//     }
//     catch(err){
//       return err
//     }
//   }
//   return p
// }
// console.log(all([1,2,3, Promise.reject('error')]))

// const promise = new Promise((resolve, reject) => { // will return a promise
//   const promise2 = Promise.reject('error').then(() => { // will return a promise
//     console.log(1)
//   }, () => {
//     console.log(2)
//   })
//   resolve(promise2)
// });
// promise.then(console.log);

// 2

// Promise.resolve(1) 
// .then((val) => {  //1
//   console.log(val) //1 -
//   return val + 1 
// }).then((val) => { //2
//   console.log(val) // 2 -
// }).then((val) => { 
//   console.log(val) // undefined -
//   return Promise.resolve(3)
//     .then((val) => { 
//       console.log(val) // 3 -
//     })
// }).then((val) => { // undefined
//   console.log(val)  // undefined -
//   return Promise.reject(4) 
// }).catch((val) => { //4
//   console.log(val)  // 4-
// }).finally((val) => { // undefined
//   console.log(val) // undefined -
//   return 10
// }).then((val) => {
//   console.log(val) // undefined
// })

// Promise.resolve(1) 
// .then((val) => {  //1
//   console.log(val) //1 -
//   return val + 1 
// }).then((val) => { //2
//   console.log(val) // 2 -
// }).then((val) => { 
//   console.log(val) // undefined -
//   return Promise.resolve(3)
//     .then((val) => { 
//       console.log(val) // 3 -
//     })
// }).then((val) => { // undefined
//   console.log(val)  // undefined -
//   return Promise.reject(4) 
// }).catch((val) => { //4
//   console.log(val)  // 4-
//   return Promise.resolve(5)
// }).finally((val) => { // undefined, finally is like cleanup, it will not take the value from the previous then block/ catch block
//   console.log(val) // undefined -
//   return 10
// }).then((val) => {
//   console.log(val) // 5, then will take the value from the nearest then block/ catch block
// })

Promise.resolve(1)
.then(() => 2).
    then(Promise.resolve(4))
.then(console.log)