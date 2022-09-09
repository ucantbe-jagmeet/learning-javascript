var user ={
    firstName: "John",
    secondName: "Cloe",
    role: "Admin",
    loggedInCount :22,
    facebookLoggedIn: true,
    courseList:[],
    getCourseCount: function (){
        return `${this.firstName} is enrollded in ${this.courseList.length} items`;
    },
    buyCourse : function (courseName){
        this.courseList.push(courseName);
    }
}


user.buyCourse("NODE JS");
user.buyCourse("REact JS");
user.buyCourse("Angular course");
console.log(user.getCourseCount());
