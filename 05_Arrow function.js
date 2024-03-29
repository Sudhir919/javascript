
// ****************************** Normal Function **********************************

let addition = function(x,y) {
 return x + y;
}
console.log(addition(10,10)); // returns 20


//  ******************************* Arrow Function **************************************

let addition = (x,y) => x + y;
console.log(addition(10,10)); // 20;


// -->>

greet = () => {
   return "Hello World!";
 } 


//  -->>

greet = () => "Hello World!";




//  ******************************************* EXAMPLE *********************************************************





// ARROW FUNCTIONS

// Creating a regular function
const harry = function (){
    console.log("This is the best person ever")
}

// Converting it to an arrow function
const harry = ()=>{
    console.log("This is the best person ever")
}
harry();

// function returning something
const greet = function(){
    return "Good Morning";
}

// One liners do not require braces/return
// one line will automatically return
const greet = () =>  "Good Morning";    // here if we want to return Good Morning then we have to write like    const greet = () => { return "Good Morning"; }


const greet = () =>  ({name: "harry"});   // if we want to return object then use double braces instead of single

// Single parameters do not need parenthesis 
// but you will have to put parenthesis if there are multiple paramteres
const greet = name =>  "Good Morning " + name + ending;



console.log(greet('Harry'))



