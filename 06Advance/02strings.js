var name = "vijay";

//console.log(name);

//need to escape single quote here
var example = 'vijay\'s';

//no need to esacpae in case of back ticks
var example1 = `vijay's`;

//no need to use comma or concatting of string when using back tick-clean way for string representation
var fullName = `${name} kumar`;

console.log(fullName);

console.log(fullName.charAt(0));
console.log(fullName.endsWith("r"));
console.log(fullName.includes("ar"));
console.log(fullName.toUpperCase());
