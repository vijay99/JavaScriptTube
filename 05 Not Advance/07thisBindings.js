const vijay = {
    firstName : "Kumar",
    lastName : "Vijay",
    role : "Admin",
    courseCount: 3,
    getInfo: function() {
        console.log(` 
            First name is ${this.firstName}
            Last name is ${this.lastName}
            His role is ${this.role}
            and he is studting ${this.courseCount} course

        `);
    }
}


const dj = {
    firstName: "Rock",
    lastName: "DJ",
    role: "Sub-Admin",
    courseCount:4
};

// vijay.getInfo(); 
// dj.getInfo();

//Binding
//vijay.getInfo.bind(dj);

//Binding and storing the refrence 
var djInfo =  vijay.getInfo.bind(dj);
djInfo(); 



//directly calling dj object instead of binding
vijay.getInfo.call(dj);

