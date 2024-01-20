//Create a h2 heading element with text Hello javascript and then append "from Ali" string to it ?

let h2 = document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText = h2.innerText + " from Ali";


//Create 3 divs with the common class name - "box" . Access them and add some unique text to each of them ?

let divs = document.querySelectorAll(".box");

let index = 1;
for (let div of divs) {
    div.innerText = `new unique value ${index}`;
    index++;
}