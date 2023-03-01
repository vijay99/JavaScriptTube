var User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
         console.log(`Course count is : ${this.courseCount}`);
    };
};


User.prototype.getFirstName = function () {
    console.log(`Your firstname is : ${this.firstName}`);
}



var hitesh = new User("hitesh",2);
hitesh.getCourseCount();
//hitesh.getFirstName();

//better way to call getFirstName()
if(hitesh.hasOwnProperty("firstName")){
    hitesh.getFirstName();
}

//console.log(hitesh);

var sam = new User("sam",1);
sam.getCourseCount();
sam.getFirstName();

//console.log(sam);