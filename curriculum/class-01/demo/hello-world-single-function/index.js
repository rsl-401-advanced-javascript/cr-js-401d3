'use strict';

console.log('before require');

// Pull in our 'hello' module
const hello = require('./lib/hello');

// What is 'hello?'  As you'll see from this console.log, it's a function that you can call.
console.log(hello);

// Call that function directly, and it should log out 'Hello, John'
hello('Dave');


// Here, we imported a node module that itself is just a function, and then ran it.
