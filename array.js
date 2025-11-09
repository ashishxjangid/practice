// Reduce Method

//ex-1
const arr= [5,1,3,2,6];

const output= arr.reduce(function (acc, curr){
    acc += curr;
    return acc;
}, 0);

console.log(output);

//ex-2
const max= arr.reduce(function (acc, curr){
    if(acc<curr){
        acc= curr;
    }
    return acc;
}, 0);

console.log(max);

//Map example-
const users= [
    { firstName: "ashish", lastName: "jangid", age: 22},
    { firstName: "donald", lastName: "trump", age: 75},
    { firstName: "elon", lastName: "musk", age: 50},
];

const fullName= users.map((x) => {
    return x.firstName +" "+ x.lastName; 
});

console.log(fullName);


//Reduce example-
const ages= users.reduce(function (acc, curr){
    if(acc[curr.age]){
        acc[curr.age]++;
    }
    else{
        acc[curr.age]= 1;
    }
    return acc;
}, {});

console.log(ages);
//acc= { '22': 1, '50': 1, '75': 1 }


//Filter example (Chaining with Map)-
const res= users.filter(function (x){
    if(x.age<=30){
        return x;
    }
}).map((x)=> {
    return x.firstName;
});

console.log(res);

//Same example using Reduce 
const ans= users.reduce((acc, curr)=> {
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return acc;
}, []);

console.log(ans);


//similar problem using map, filter and reduce-
const numbers= [1,2,3,4,5];

//using filter + map
const result= numbers
    .filter((x)=> {
        if(x%2 === 0){
            return x;
        }
    })
    .map(x => x*x);

console.log(result);

//using reduce
const result2= numbers.reduce((acc, curr)=>{
    if(curr%2===0){
        acc.push(curr*curr);
    }
    return acc;
}, []);

console.log(result2);