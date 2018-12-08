import { sayHello } from './greet'

function hello(divName: String, compiler: string) {
    const elt = document.getElementById(divName)
    elt.innerText = sayHello(name)
    console.log(`Hello from ${compiler}`)
}

hello("TypScript");

sayHello("greetings", "Manny")
console.log(sayHello("Manny"))
