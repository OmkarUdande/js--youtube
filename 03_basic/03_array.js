const user = {
    username : "OMKAR",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "SHIVANI"
// user.welcomeMessage()

console.log(this);


// *******
// function chai(){
//     let username = "OMii"
//     console.log(this.username);
    
// }
// chai()


// *********

const chai = () =>  {
    let username = "OMII"
    console.log(this.username);
    
}
// chai()


// *****
// explicit retrun :
// const addTwo= (num1, num2 ) => {
//     return num1+num2
// }


// implicet retrun
// const addTwo= (num1, num2 ) =>  num1+num2

// const addTwo= (num1, num2 ) =>  ( num1 + num2 )

const addTwo= (num1, num2 ) =>  ({username : "omkar"})


// console.log(addTwo(5,4));



