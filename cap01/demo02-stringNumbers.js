let salaryFriend = 1000;
let mySalary = "2999.14";

let convertSalary = Number(mySalary);
console.log(salaryFriend + convertSalary);
console.log(typeof(salaryFriend), salaryFriend);
console.log(typeof(mySalary), mySalary);

console.log(
    isNaN(mySalary)
);

let myVariable = 'Hello World';
let myStringOther = "Hello World2";
let myStringVariable = `${myVariable} - ${myStringOther}. AE`;
console.log(myStringVariable);