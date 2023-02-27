var name;
var name2;
var name3;

var countries = ["India","USA","Japan","Russia"];

var states = new Array("Rajasthan","Delhi","Mumbai");

//console.log(states); 
//console.log(states[0]);
//console.log(states.length);

states[0]="Punjab";

//console.log(states);

var user = ["vijay","vijay@gmail.com",3,34,true];
//console.log(user);

//remove the last value
user.pop();
//console.log(user);

//remove first element of array -expensive 
user.unshift("New Value")
//console.log(user);

user.shift()
//console.log(user);

console.log(user);
console.log(user.indexOf(3));
console.log(user.indexOf("newy"));

console.log(Array.from("vijay"));

