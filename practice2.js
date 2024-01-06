// Create a new button elemenet. Give it a text click me , background color of red and text color of white?

let newBtn = document.createElement("button");
newBtn.innerText = "click me ";

newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

document.querySelector("body").prepend(newBtn);


//Create a p tag in html and give it a class and some styling. Now create a new class in CSS and try to append this class to the p element?

let para = document.querySelector("p");

para.getAttribute("class");
console.log(para.getAttribute("class"));

// using classList 
para.classList.add("newClass");

console.log(para.getAttribute("class"));