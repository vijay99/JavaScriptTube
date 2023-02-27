// sayHello();

// function sayHello(){
//     console.log("Hello");
// }

// type as well as content check
// if(2===2){
//     console.log("this is true.");
// }


if(2==="2"){
    console.log("this is true.");
}


// Code tested in browser console::::::::
// var myName = "Vijay";
// undefined
// myName;
// 'Vijay'
// if(myName === myNam){
//     console.log("This is true statement.");
// }
// VM674:1 Uncaught ReferenceError: myNam is not defined
//     at <anonymous>:1:15
// (anonymous) @ VM674:1
// if(myName === myName){
//     console.log("This is true statement.");
// }
// VM685:2 This is true statement.
// undefined
// if(myName === window.myName){
//     console.log("This is true statement.");
// }
// VM724:2 This is true statement.
// undefined



var myName = "Vijay";

// if(myName === myName){
//     console.log("This is again true statement.")
// }

if(myName === window.myName){
    console.log("This is again true statement.")
    }