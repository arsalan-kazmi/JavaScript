/* JavaScript program to count vowels in a user input string  */

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char == "a" ||
      char == "i" ||
      char == "o" ||
      char == "e" ||
      char == "u"
    ) {
      count++;
    }
  }
  console.log(`The number of vowels in ${str} are ${count}`)
}

let str = prompt("Enter you string here : ");
console.log("You entered :",str);
countVowels(str);