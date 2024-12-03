//  Immediately Invoked Function Expressions (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);    
// }
// chai()

// 1********:
(function chai(){
    // Name IIFE
    console.log(`DB CONNECTED`);    
})();


// 2********:
(  () => {
    //  Unname IIFE
    console.log(`DB CONNECTED TWO`);
    
})();

//3 *****:
(  (name) => {
    // Paramenter Pass IIFE
    console.log(`DB CONNECTED TWO ${name}`);

})('omkar')

