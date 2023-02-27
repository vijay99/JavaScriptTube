// function tipper(a){
//     var bill = a;
//     console.log(bill + 5);
// }

// tipper(5);


//after using parsing,it gives desired result

tipper("80");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}


//big tipper function -here bifTigger is actually variable not function and hence 
//when we call before declaration getting arror as "variable declaration are scanned
//and made undefined instead of avaliable in case of function".SO this is the concept 
//of hositing and while hositing calling should happen after declaration


var bigTipper=function (a){
    var bill = parseInt(a);
    console.log(bill + 5);
}
bigTipper("200");


console.log(name);
var name = "vijay";

function sayName(){
    console.log("Mr. Vijay");
}

sayName();

console.log(name);



