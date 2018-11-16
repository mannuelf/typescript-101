function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 123,
    lastName: "Ferreira"
};
document.body.innerHTML = greeter(user);
