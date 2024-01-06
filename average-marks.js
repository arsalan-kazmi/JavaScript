//JavaScript program to calculate average marks of students given in an array

// create an array
let arr = [85, 97, 44, 37, 76, 60];

// create a variable for the sum and initialize it
let sum = 0;

// iterate over each item in the array
for (let i = 0; i < arr.length; i++ ) {
  sum += arr[i];
}

console.log(`Sum of the marks = ${sum}`)

let avg = sum/arr.length;
console.log(`Average marks of the class = ${avg}`);