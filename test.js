// Your code here 
const Employee = require('./employee.js')

const employee1 = new Employee("John Wick", "Dog Lover")


let boundedSayName = sayName.bind(employee1)
setTimeout(boundedSayName, 2000)

let boundSayOccupation = sayOccupation.bind(employee1)
setTimeout(boundSayOccupation, 3000)