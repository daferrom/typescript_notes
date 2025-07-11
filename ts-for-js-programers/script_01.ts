// TS offers all JS features with an additional level of TS type System

// lowering the chance of bugs

// Types by Inference

/* TS knos JS lang and will generate type in many cases
For example creating a variable and assing it a particular value.
Typescript will use the value as its type.
*/

let helloWorld = "Hello World";
// let helloWorld: string

// Defining Types 

/* Ts allows to use a wide variety of dessign patterns in JS
However , some patterns make it difficult for types to be inferred automatically 
(For example patterns that use dynamic programming)

*/

const pet = {
  name: "Michu",
  id: 0,
}

// You can explicity describe this object's shape using an interface declaration

/* In TS an interface es a way to define an oject a class or function
it works as a contract that specifies which properties or method must have an entity
without defining how would dbe implemented.
*/

interface Pet {
  name: string,
  id: number,
}

/* you can deal re that JS object conform to the shape of your new interface 
by usingsyntax like < : TypeName >after a variable declaraction 
*/

const pet2: Pet = {
  name: "Michu",
  id: 0
}

// If you provide an object that doesn't match the interface you have provided TS will warn you

const pet3: Pet = {
  username: "Mises", 
  id: 1
}

/* Since Javascript supports classes and object-oriented programming, so does Typescript
You canuse an interface declaration with classes:
*/

interface Vehicle {
  name: string,
  id: number,
}

class Car {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const myCar: Vehicle = new Car("corolla", 66);

// You can use interfaces to annotate parameters and return values to functions:

function deleteCar(myCar: Vehicle) {
  // ...
}
const user: string = "some name"

function getUsersCar(): Vehicle {
  return myCar// ...
}

/* Theres is a small set of primitive types available in JS
* boolean
* bigint
* null
* number
* string
* symbol

Those can be used in an interface
TS extend the list to few more, such as 

* any (allow anything)
* unknown (ensure someone using this type declares what the type is),
* never (it’s not possible that this type could happen)
* void (a function which returns undefined or has no return value).

There are two syntaxes for building types: Interfaces and Types
You Should prefer interface
Use type when you need specific features

*/

/* Composing Types 

With Typescript, you can create complex types by combining simple ones.
There are two popular ways to do so: unions and generics
*/

/* Unions

With union, you can declare that a type could be one of many types.
e.g you can describe a boolean type as being either true or false:

*/

type MyBool = true | false;

/* A popular use-case for union types is to describe the set of string or number litereals that a value is allowed to be
*/

type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9 ;

/* Unions provide a way to handle different types too. For example, you may have a function that takesan array or a string */

function getLength(obj: string | string[]) {
  return obj.length
}

/*Example
A function can return diferent values depending on wheter is passed a string or an array
*/

function wrapInArray(obj: string | string[]) {
  if(typeof obj === "string") {
    return [obj];
  }

  return obj;
}

/* Generics 
* Generics provides variables to types
* A common example is an array.
* An array without generics could contain anything.
* An array with generics can describe values that the array contains.
*/

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>

// You can declare your own types that use generics

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.

declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
backpack.add(23); // this fails 23 is not a string

backpack.add("23"); // this works "23" is a string

/* Structural Type System 
* One of the TS core principles : Type checking focuses on the shape that values have. ("duck typing" or "structural typing")
* In an structural type system, if two objects have the same shape, they are considered to be the same type
*/

interface Point {
  x: number,
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`)
}

// logs "12 , 26"

const point = { x: 12, y: 26 };

logPoint(point);

/* 
* The point variable is never declared to be a Point type
* However TS compares the shape of point to the shape of Point in the type-check
* They have the same shape so the code passes
* The shape-matching only requires a subset of the object's fields to match.
*/

const point3 = { X:12, y:26, z:89};

logPoint(point3); // logs "12 , 26"

const rect = { x:33, y:3, width: 30, height: 80};
logPoint(rect); // logs "33, 3"

const color = { hex: "#187ABF"};
logPoint(color) /* Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
  Type '{ hex: string; }' is missing the following properties from type 'Point': x, yts(2345) */


// Theres is no difference between how classes and objects conform to shapes //

class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y
  }
}

const newVP = new VirtualPoint(13,56);
logPoint(newVP); // logs "13, 56"