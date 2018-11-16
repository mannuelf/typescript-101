"use strict";
exports.__esModule = true;
var greet_1 = require("./greet");
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello("TypScript");
console.log(greet_1.sayHello("Manny"));
