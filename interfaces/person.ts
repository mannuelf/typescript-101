interface Person {
    firstName: string
    lastName: string
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user = {
    firstName: 123,
    lastName: "Ferreira"
}

document.body.innerHTML = greeter(user)