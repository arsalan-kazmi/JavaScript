// Program to calculate square of each number in an given array using for.each method

let arr = [1, 2, 3, 4, 5];

arr.forEach(function square(num){
    let result = num*num;
    console.log(`The square of ${num} is ${result}`);
})


// ALTERNATE METHODS

/* Arrow function with for.each 

arr.forEach((num) => {
    let result = num*num;
    console.log(`The square of ${num} is ${result}`);
}) */

/* Passing a function to for.each

let calcSquare = (num) =>{
    console.log(num*num);
}
arr.forEach(calcSquare); */