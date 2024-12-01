
function sayMyName(){
    console.log("o");
    console.log("m");
    console.log("k");
    console.log("a");
    console.log("r");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// *******:=
function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
console.log("Result: ", result);



// *******:=
function loginUserMessage(username){
    return `${username} just logged in `
}
console.log(loginUserMessage("OMKAR"));



// undefined value :=
// *****:=
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a user name ");
        return  
    }
    return `${username} just logged in `
}
console.log(loginUserMessage());


// *****:=
function loginUserMessage(username  = "Sam"){
    if(username === undefined){
        console.log("please enter a user name ");
        return  
    }
    return `${username} just logged in `
}
console.log(loginUserMessage());


