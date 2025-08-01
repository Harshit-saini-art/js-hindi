// singleton
// object.create

// objects literals

const mySym = Symbol("Key1")


const Jsuser = {
    name: "Harshit",
    "full name": "Harshit saini",
    [mySym]: "myKey1",
    age: 20,
    location: "Jhajjar",
    email: "harshit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);

Jsuser.email = "harshit@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "harshit@microsoft.com"
// console.log(Jsuser);

Jsuser.greeting = function() {
    console.log("Hello JS user");
}
Jsuser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());