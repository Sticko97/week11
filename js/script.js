// function greet(user){
//     console.log(`Hello ${user}`);
// }

// greet("Stanley");

// const name = function(user){
//     console.log(`Hello ${user}`);
//      console.log('Hello ' + user); 
// }  

// const greet = (user) =>
// {
//     console.log(`Hello ${user}`);
// }

// greet();

// function greet(user, time = "day")
// {
//     console.log(`Good ${time} ${user}`);
// }
// greet("Stanley");
// greet("Stanley", "Night");

// let r = prompt("Enter a radius.");
// // console.log(r)

// function circleArea(radius)
// {
//     const radiusP = document.querySelector("#radius");
//     const resultP = document.querySelector("#result");
//     radiusP.textContent = radius;
//     let calculatedArea = Math.PI * radius * radius;
//     resultP.textContent = calculatedArea
//     return calculatedArea;  
// }

// let area = circleArea(r).toFixed(2);

// alert(`The area ${r} is ${area.toFixed(2)} `)

// radius.selectqueury(r)

const unorderedList = document.querySelector(".shopping");

function populateList(list){
    for (let i = 0 ; i < list.lenth; i++) {
        let listItem = document.createElement("li");
        listItem.textContent
        console.log(list[i]);
    }
}

const shoppingList = ["cheese", "bread", "green pepper",];
populateList(shoppingList)