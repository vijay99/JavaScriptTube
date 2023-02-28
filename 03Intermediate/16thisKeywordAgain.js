console.log(this);

var user = {
    firstName: "Kumar Vijay",
    courseCount: 4,
    getCourseCount:function() {
        console.log("Line 7",this);
        function sayHello(){
            console.log("Hello");
            console.log("Line no 10",this);
        }
        sayHello();
    }
}

user.getCourseCount();