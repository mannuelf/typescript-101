import { sayHello } from './greet'

function hello(compiler: string) {
    console.log(`Hello from ${compiler}`)
}

hello("TypScript");

console.log(sayHello("Manny"))