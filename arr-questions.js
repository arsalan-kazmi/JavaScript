// Filter marks of students that scored more than 90? 

/* let marks = [97, 64, 32, 49, 99, 96, 86];

let gradeA = marks.filter((val) => {
    return val > 90;
})

console.log(gradeA);
*/

//Take n as input form user. Create an array of numbers form 1 to n?
let n = prompt("Enter a number : ");

let arr = [];

for (let i=1; i<=n; i++){
    arr[i-1] = i;
}

console.log(arr);

//Use the reduce method to calculate sum of all numbers in the array ?

let sum = arr.reduce((res, curr) =>{
    return res + curr;
})

console.log("Sum = ",sum);

// Use th ereduce method to calculate product of al numbers in the array?

let mul = arr.reduce((res, curr) =>{
    return res * curr;
})

console.log("Factorial = ",mul);