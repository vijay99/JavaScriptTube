// var returnedValue = Math.max(2,5,7,4,2,8);
// console.log(returnedValue);


// var myObj = {}

// Object.assign(myObj,{a:1,b:2,c:3},{z:9,y:8,x:7});
// console.log(myObj);



function sumOne(a,b) {
    return a+b;
}


var myA =[4,6] 
// console.log(sumOne(4,6));
//console.log(sumOne(myA));
//console.log(sumOne(...myA));   //this is spread operator


//not sure how many argument comming in then but  3 dots 
//followed by the variable names 'args' is very comman vaiable but it can be any other names as well
// function sumTwo(...args){  //this is Rest operator
//     let sum = 0;
//     for(const arg of args ){
//         sum+=arg;
//     }
//     return sum;
// }

// console.log(sumTwo(2,3,7));


//performing multiplication for first two element and adding rest other element in array
function sumTwo(a,b,...args){  //this is Rest operator
    console.log(args);
    let sum = 0;
    let multi= a*b;
    for(const arg of args ){
        sum+=arg;
    }
    return [multi,sum];
}

console.log(sumTwo(2,3,7,7,7));