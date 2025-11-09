//Delete property
var student =  { 
  name : "David", 
  class : "VI", 
  rollno : 12  };

console.log(student);
delete student.rollno;
console.log(student);


//Iterate over properties of Object
for(let i in student){
    console.log(i + ": "+ student[i]);
}


//Nested Objects
let person = {
    name: "Alice Smith",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Springfield",
        zipCode: "12345"
    }
};

console.log(person.address.street);


//Function inside an onject
const user = {
  name: "Ashish",
  greet: function() {
    console.log("Hello, " + this.name + "!");
  }
};

user.greet(); 


//Function that multiplies all numeric values in an object
let nums = {
  a: 100,
  b: 200,
  title: 'JavaScript'
};

function multiplyByTwo(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2; 
    }
  }
}

multiplyByTwo(nums);
console.log(nums);


//Array of Objects
//Find the total price of all products
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];

let total = 0;

for (let item of products) {
  total += item.price;
}

console.log("Total price:", total); 


//length of the object
function getObjectLength() {

    exampleObject = {
        id: 1,
        name: 'Arun',
        age: 30
    }

    objectLength = Object.keys(exampleObject).length;
    console.log(objectLength);
}
getObjectLength();
