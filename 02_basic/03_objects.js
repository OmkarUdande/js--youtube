// singleton

// object literals
const mySym = Symbol("key1")


const Jsuser = {
    name: "Omkar",
    "Fullname":"omkar Udande",
    [mySym]: "mykey1",
    age:23,
    location: "bangalore",
    email: "omii123@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"]);
// console.log(Jsuser["Fullname"]);
// console.log(Jsuser.mySym);
// console.log(Jsuser[mySym]);

// object accses the code  by using in dotnotion (.)


// object Freeze:
Jsuser.email = "omkarudande@gmail.com"//hear in chage th value
// Object.freeze(Jsuser)// This method are uesd in after change the valuse this valuse lock that time freeze method are uesd 
Jsuser.email = "omiiudande@gmail.com"
// console.log(Jsuser);


// Function:
Jsuser.greeting = function(){
    console.log("Hello js users");  

}
Jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);   
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());




