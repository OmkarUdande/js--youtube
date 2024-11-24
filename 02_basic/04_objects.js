const tinderuser = new Object()

tinderuser.id = "123abc"
tinderuser.name = "Ranjit"
tinderuser.isLoggeIn = false

// console.log(tinderuser);

const regularUser = {
    email:"some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Kumar",
            lastname: "Udande"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b",}
const obj2 = {3:"a", 4:"b",}
const obj4 = {5:"a", 6:"b",}


// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)


// sperd opratoer :=
const obj3 ={...obj1,...obj2} // most using in js=avascript
// console.log(obj3);

const users = [
    {
        id:1,
        email:"omkar@gmail.com"
    },
    {
        id:2,
        email:"dumii@gmail.com"
    },
]

users[1].email
console.log(tinderuser);
// object acssin by uisng in kye value ,

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isLoggIn'));




 