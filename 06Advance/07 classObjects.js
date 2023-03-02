//import User from "./06classjs";

const User = require("./06classjs.js");


const  vijay = new User("Vijay","vijay81238@gmail.com");

console.log(vijay.getInfo());

vijay.enrollCourse("React Native");
vijay.enrollCourse("Machine Learning");

console.log(vijay.getCourseList());

//looping 

let courses = vijay.getCourseList();

courses.forEach(course => {console.log(course)});