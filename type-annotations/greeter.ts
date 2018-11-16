
// type annotations are to record intended contract of the function or variable..
// typescript offers static analysis based on both structure and annotions
function greeter(person: string) {
    return "Hello, " + person;
}

var user = "Mannuel Ferreira";

document.body.innerHTML = greeter(user)
