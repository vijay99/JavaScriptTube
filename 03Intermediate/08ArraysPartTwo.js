// function isEven(element){
//     // if(element  % 2 ===0){
//     //     return true;
    
//     // }
//     // return false;

//     return element %2 === 0;
// }

// console.log(isEven(30));


var isEven =  (element) =>{
    // if(element  % 2 ===0){
    //     return true;
    
    // }
    // return false;

    return element %2 === 0;
}

//console.log(isEven(30));

var result = [2,4,61,8].every(isEven);
console.log(result);

//callback method (method without name -functional programming)
var result1 = [2,3,6,8].every((e) =>  e% 2 === 0);

console.log(result1);