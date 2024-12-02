//  scope:= {}
// not use in Var

// var c = 300

let a = 300   // out side the if condtion the scope is the  callad as the  "globle scope" 

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", b);     // inside the if condiion this is scope call as the  "Block scope" 
    
}
console.log(a);
// console.log(b);
// console.log(c);
