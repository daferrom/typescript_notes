// Accesign the property 'toLowerCase'
// on 'message' and then calling it 

message.toLowerCase();

//calling 'message'

message();

/* Assuming we don't know the value of message 
we can't reliably say what results we'll get from trying to run any of this code.
The behavior of each operation depends entirely on what value we had in the first place 

* Is message callable?
* Does it have a property called toLowerCase on it?
* If it does, is toLowerCase even callable?
* If both of these values are callable, what do they return?

*/

const message = "Hello World!";

// if message is defined as above  message.toLowerCase() will return the strin in lowercase <hello world!>
// however for < message(); > will fail: TypeError: message is not a function
// - it’s saying that the string "Hello World!" cannot be called as a function.

// For some values, such as primitives string and number , we can identify their type runtype using the typeof operator.

function fn(x) {
  return x.flip();
}

/* this function will only work if given an object with a callable flip property
The only way in pure JavaScript to tell what fn does with a particular value is to call it and see what happens.

It's hard to predict what the code will do before it runs, which means it’s harder to know what your code is going to do while you’re writing it.

A type is the concept of describing which values can be passed to fn and which will crash. JavaScript only truly provides dynamic typing - running the code to see what happens.

*/

// Static type-checking
/*
Ideally, we could have a tool that helps us find these bugs before our code runs.
That’s what a static type-checker like TypeScript does.
Static type systems describe the shapes and behaviors of what our values will be when we run our programs.
A type-checker like TypeScript uses that information and tells us when things might be going off the rails.
*/

const message = "hello!";
 
message();
// This expression is not callable.
//   Type 'String' has no call signatures.

/* Non-exception Failures 

So far we’ve been discussing certain things like runtime errors
Those cases come up because the ECMASCript specification has explicit instructions on how the language shpould behave when it runs into something unexpected.

*/



const store = {
  name: "Carulla",
  id: 1,
}

store.location

/*
In JS returns undefined, not a runtime error like calling the function that doesn't exists
In TS it produces an error before run the code : Property 'location' does not exist on type '{ name: string; id: number; }'.ts(2339)
*/

/* While sometimes that implies a trade-off in what can be expressed 
the intent is catching legitimate bugs in our programs
TS catches a lot of legitimate bugs.
*/

// Example: typos

const announcement = "Hello World!";

// How quickly can you sppot the typos ?
announcement.toLocaleLowerCase();
announcement.toLocalLowerCase(); // Property 'toLocalLowerCase' does not exist on type '"Hello World!"'. Did you mean 'toLocaleLowerCase'?ts(2551)

// We probably meant to write this...
announcement.toLocaleLowerCase();

// Example : uncalled functions

function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5; // Operator '<' cannot be applied to types '() => number' and 'number'.
}

// Example: basic logic errors

const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
// This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
}

// Typescript for tooling
/* TS prevents mistakes and bugs */

import express from "express";
const app = express();

app.get("/", function(req, res){
  res.sen
})




