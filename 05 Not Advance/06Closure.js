function doAddition(x){
    return function(y){
        return x + y;
    }
}

var add5 = doAddition(4);
console.log(add5(5));


//this is possible because of closure and also how memory works in JS
//remember the doAddition() never goes off from 
//memory as one reference is alive for it
console.log(doAddition(5)(5)); //known as curring

