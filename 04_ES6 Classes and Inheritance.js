



// ******************************* CLASSES IN ES6 ***********************************************

class Person {
  constructor(name) {
    this.name = name;
  }
}


// -->> Creating object

class Person {
  constructor(name) {
    this.name = name;
  }
}

const person1 = new Person('John');

console.log(person1.name); // John



// *********************************************** Example of ES6 classes ***************************************



class Employee {
    constructor(givenName, givenExperience, givenDivision) {
        this.name = givenName;
        this.experience = givenExperience;
        this.division = givenDivision;
    }

    slogan(){
        return `I am ${this.name} and this company is the best`;
    }

    joiningYear(){
        return 2020 - this.experience;
    }

//   making normal func for addition in this we will not use this
    static add(a, b){
        return a + b;
    }
}

// employee kei property ko inherit krneei kei liyee using extend keyword

class Programmer extends Employee{
    constructor(givenName, givenExperience, givenDivision, language, github){  // 
        super(givenName, givenExperience, givenDivision); // i.e jb hm programmer naam ka template bnna rhee hai then jo-jo value jisse extend ho rhaa hai saari value 
                                                         // super mei pass kr de rhee hai i.e super means pichlli class ka constructor
        this.language = language;
        this.github = github;
    }

    favoriteLanguage(){
        if (this.language == 'python'){
            return 'Python';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a, b){
        return a * b;
    }
}

// harry = new Employee("Harry", 56, "Division");
// console.log(harry.joiningYear());
// console.log(Employee.add(34, 5))
rohan = new Programmer("Rohan", 3, "Lays", "Go", "Rohan420")
console.log(rohan)
console.log(rohan.favoriteLanguage())
console.log(Programmer.multiply(5, 7));
















