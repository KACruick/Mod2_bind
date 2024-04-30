// Your code here 

class Employee {
    constructor(name, occupation){
        this.name = name;
        this.occupation = occupation;
    }
    sayName(){
        console.log(`${this.name} says hello`);
    }

}

// const employee1 = new Employee("John Wick", "Dog Lover")
// sayName(employee1)

module.exports = Employee