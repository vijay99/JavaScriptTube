function init() {
    console.log("I am inside init");
    var firstName = "vijay";
    function sayFirstName() {
        console.log(firstName);
    }
    return sayFirstName;
}

var value=init();
//this is closure
value();

//as soon as the context is done ,nobody knows what this 'firstName'
//console.log(firstName);