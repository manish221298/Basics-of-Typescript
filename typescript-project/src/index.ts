// console.log("type script is here still");
// console.log("You should to work with typescript in reactjs")
// console.log("check it here")


// Classes in typescript

class User {
    name: string
    email: string
    city: string = "patna"

    constructor(name: string, email: string){
        this.name= name;
        this.email= email
    }
}

const manish = new User("manish", "man@gmail.com")

// keywords
// 1. private:-  we can only access that keywords within the class
// 2. protected:- we can access protected class with the inharit(extends) class also

