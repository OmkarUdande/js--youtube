const name = "omkar"
const repoCount = 50;

// //console.log(name +  repoCount + " Value"); //Old Type

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //New Type

const gameName = new String('OMKAR-UDANDE-COM')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('k'));


//String('OMKAR-UDANDE')
const newString = gameName.substring(0,5)  // op: OMKAR
// console.log(newString);

const anotherString = gameName.slice(-6, 4)
// console.log(anotherString);

//Trim:
const newStringOne = "     OmkarUdande    "
console.log(newStringOne);
console.log(newStringOne.trim());

//Replace: 
const url ="https://omkar.com/omkar%20udande"
console.log(url);
console.log(url.replace('%20','-'));
//includes are uesd in String present inside the world or urls check is thers mence True and notheing mence= False
console.log(url.includes('omkar')); //true
console.log(url.includes('udande')); //true
console.log(url.includes('Ram'));   // false
   

console.log(gameName.split('-'));





