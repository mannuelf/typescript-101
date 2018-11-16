// interface can describe objects

interface Person {
    firstName: string
    lastName: string
}

// no explicit implements clause required, just pass as param
function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName
}

let user = {
    firstName: "Mannuel",
    lastName: "Ferreira"
}

document.body.innerHTML = greeter(user)