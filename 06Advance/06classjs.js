class User {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    courseList = [];

    getInfo() {
        return {name : this.name,email: this.email};
    }

    enrollCourse(name){
        this.courseList.push(name);
    }

    getCourseList(){
        return this.courseList;
    }

}

//let vijay = new User("vijay","vijay8123@gmail.com");

module.exports = User;  //now any other file can access content from outside