// dates

// let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toDateString());
// console.log(mydate.toJSON());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);


// ex:=
// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,2,3,5,3)
// let myCreatedDate = new Date("2023-07-14")
let myCreatedDate = new Date("01-14-2024")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());


newDate.toLocaleString('default',{
    weekday:"long",

})












