var user = {
    firstName : "Hitesh",
    lastName : "Kumar",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true
};

console.log(user.firstName);
console.log(user["lastName"]);

user.loginCount = 44;
console.log(user.loginCount);
console.log(user);
console.table(user);