function init() {
    var firstName = "vijay";
    function sayFirstName() {
        console.log(firstName);
    }
    sayFirstName();
}

init();

//as soon as the context is done ,nobody knows what this 'firstName'
console.log(firstName);