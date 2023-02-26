/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user

Input : getUserRole(name,role)


*/

// function getUserRole(name,role){

//     switch(role){
//         case "admin":
//             return `${name} is admin with all access`
//             break;
//         case "subadmin":
//             return `${name} is sub-admin with access to create/delete course`;
//             break; 
//         case "testprep":
//             return `${name} is testprep with access to create and delete test`
//             break;
//         case "user":
//             return `${name} is user to consume content`;
//             break;   
//         case "admin":
//             return `${name} is trail user`;
//             break;            
//     }

// }

// console.log(getUserRole("Vijay","admin"));

// var userRole = getUserRole("Sammy","user");
// console.log(userRole);



/* In JavaScript function can be included in variable                                    */
var getUserRole=function (name,role){

    switch(role){
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is sub-admin with access to create/delete course`;
            break; 
        case "testprep":
            return `${name} is testprep with access to create and delete test`
            break;
        case "user":
            return `${name} is user to consume content`;
            break;   
        case "admin":
            return `${name} is trail user`;
            break;            
    }

};

console.log(getUserRole("Vijay","admin"));

var userRole = getUserRole("Sammy","user");
console.log(userRole);