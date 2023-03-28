

// ***************************************  Destructuring in JavaScript  *************************************88


let a, b;
[a, b] = [34, 564];
// console.log(a, b);

[a, b, c, ...d] = [1,2,3,4,5,6,7,8,9,10, 11, 12, 13];    // -->> here 3 digit i.e a , b, c  ( where a for 1 , b for 2 , c for 3 ) kei baad ... hai  to dot dot kei baad saarei
                                                       // element array mei store ho jaayengee means 4 se lekrr 13 tk saarei elemnt array mei store ho jaayenge.
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)



// ******************************************** Array Destructuring  ******************************************** 

({a, b, c, ...d} = {a: 34, b:345, c:67, d:45, e:34})
// console.log(a, b, c, d)

const fruits = ['Apple', 'Bananas', 'Mangoes'];
[a, b, c] = fruits;
// console.log(a, b, c)


// ******************************************** Object Destructuring  ******************************************** 

const laptop ={
    model: "HP Pavilion",
    age: "23 days",
    gender: "Male",
    net: 1233,
    start: function (){console.log('started');}
    }

const {model, age, gender, net, start} = laptop;
console.log(model, age, gender, net, start);
start()

//  -->>output

/*
HP Pavilion 23 days Male 1233 ƒ (){console.log('started');}
practice.js:20 started

*/



















