// PRACTICE QUESTION 

let items = [250, 645, 300, 900, 50];

// Implementation using FOR OF LOOP
let i = 0;
for (let val of items){
    console.log(`Value before offer = ${val}`);

    let offer = val/10;
    items[i] = items[i] - offer;
    console.log(`Value after offer = ${items[i]}`)
    i++;
}

/* Implementation using FOR LOOP


for (let i = 0; i < items.length; i++){
    let offer = items[i]/10;
    items[i] -= offer;
    console.log(`Value after offer = ${items[i]}`)

} */