//  scope:= {}
// not use in Var

let a = 300   // out side the if condtion the scope is the  callad as the  "globle scope" 

if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", b);     // inside the if condiion this is scope call as the  "Block scope" 
    
}

// console.log(a);
// console.log(b);

// ******************nested Scope:=******************
function one(){
    const username = "OMKAR"

    function two(){
        const webside = "youTube"
        console.log(username);
    }
    // console.log(webside);

    two()
        
}
one()

if (true) {
    const username = "Omkar"
    if (username == "Omkar"){
        const webside = " Youtube"
        console.log(username + webside);
        
    }
    
}



// *****************  Intersting************************


function addone(num){
    return num + 1
}

console.log(addone(5));


const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));



