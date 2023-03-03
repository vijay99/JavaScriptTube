//  function uno () {
//     console.log("I am one");
//  }

 //Below is arrow function representation of above function
const uno =()  => {
    console.log("I am one");
};

const dos =()  => {
    console.log("I am Two");
    setTimeout( () => {
        console.log("Wooooooo");
    },3000)
};

const tres =()  => {
    console.log("I am Three");
};


//call all above arrow function

uno();
dos();
tres();