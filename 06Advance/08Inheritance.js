class User {
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #courseList = [];

    getInfo() {
        return {name : this.name,email: this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourseList(){
        return this.#courseList;
    }
    //use static to prevent inheritance
    // static login() {
    //     return "You are logged in";
    // }
     login() {
        return "You are logged in";
        }
    

}

//class Subadmin inheritating User
class SubAdmin  extends User {
    constructor(name,email) {
        super(name,email); 
    }
    getAdminInfo(){
        return "I am subadmin";
    }

    login() {
        return  "Login from sub admin only";
    }
}

module.exports = User;  //now any other file can access content from outside


const tom = new SubAdmin("tom","tom@jeery.com");
console.log(tom.getAdminInfo());
console.log(tom.getInfo());
console.log(tom.login());



const rock = new User("rock","rock@rock.com");
//console.log(rock.getInfo());
rock.enrollCourse("Java");
//console.log(rock.getCourseList());
//console.log(rock.courseList);
