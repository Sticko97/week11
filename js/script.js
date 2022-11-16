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
    for (let i = 0 ; i < list.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = list[i]
        unorderedList.appendChild(listItem);
    }
}

const shoppingList = ["cheese", "bread", "green pepper",];
populateList(shoppingList);

function changeListStyle(){
    unorderedList.classList.remove("circleList");
    unorderedList.classList.add("squareList");
}

changeListStyle()

const listItems = document.querySelectorAll(".shopping li");

function greenItem(item){
    for (let i = 0; i < listItems.length; i++){
        if ( listItems[i].textContent.includes("green")){
            listItem[i].classList.add("green")

        }
    }
}

reenItem();