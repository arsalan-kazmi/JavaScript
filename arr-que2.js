// PRACTICE QUESTION

let companies = ["Bloomberg", "Microsoft","Uber", "Google","IBM","Netflix"];

console.log(companies);

// companies.shift();
// console.log("Here Bloomberg will be removed",companies);

companies.splice(2,1,"Ola");
console.log("Here Uber will be replaced by Ola",companies);

companies.push("Amazon");
console.log(companies);