var myMap = new Map();

myMap.set(1,"Uno");
myMap.set(2,"dos");
myMap.set(3,"Tres");
myMap.set(4,"Cuatro");

//console.log(myMap);

//grab keys from map 
 for(let key  of myMap.keys()){
    //console.log(`Key is ${key}`);
 }

 //grab values from map 
 for(let value  of myMap.values()){
   // console.log(`Value is ${value}`);
 }

 //both key and values
 for(let [key,value]  of myMap){
 //console.log(`Key is ${key} Value is ${value}`);
  }

 
  // by default gives values
  //myMap.forEach((value) => console.log(`${value}`));

  // to get both key and value
  //myMap.forEach((k,v)  => console.log(`${k} and key is ${v}`));

  //deleting key
  myMap.delete(2);
  console.log(myMap);