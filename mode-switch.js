/* Make a button to switch from light mode to dark mode and vice versa 
*/

let modeBtn = document.querySelector("#mode");

let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }else{
        currMode = "light";
        document.querySelector("body").style.backgroundColor ="white";
    }
    console.log(currMode);
})