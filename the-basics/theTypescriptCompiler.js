// tsc, the typescript compiler
/* npm install -g typescript
  This installs the TypeScript Compiler tsc globally. You can use npx or similar tools if you’d prefer to run tsc from a local node_modules package instead.
*/
console.log("Hello world!");
// when this runs on the terminal <tsc theTypescriptCompiler.ts> this compiles to js file theTypescriptCompiler.js
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date, "!"));
}
greet("Diego");
