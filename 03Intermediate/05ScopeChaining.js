//Remember of scope chaining using icecream anology 
var name = "vijay";

console.log("Line no 3",name);


function sayName(){
   // var name = "Mr V"
    console.log("Line no 7",name)

    sayNameTwo();
    function sayNameTwo() {
       // var name ="Mr KV"
        console.log("Line no 13",name)
    }
}

sayName(); 