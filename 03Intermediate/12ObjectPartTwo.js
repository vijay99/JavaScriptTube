var user = {
    firstName : "Hitesh",
    lastName : "Kumar",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(courseName);

    },
    getCourseCount : function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`;
    },
    info : function () {
        return `${this.firstName} ${this.lastName} has role of ${this.role} bought courses : ${this.courseList}`;
    }
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React Native course");
console.log(user.getCourseCount());
console.log(user.info());
