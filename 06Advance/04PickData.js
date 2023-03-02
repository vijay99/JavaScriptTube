// const user = ["vijay",3,"admin"];
// var role = user[2];
// var name = user[0];

// //console.log(role);

// var [name,courseCount,role]=user;
// console.log(role);


const MyUser = {
    name :"Vijay",
    courseCount:5,
    role: "admin",
};

console.log(MyUser.courseCount);
// variable name should match eaxactly same
const {name ,mycourseCount,role} = MyUser;
//console.log(mycourseCount);
console.log(role);