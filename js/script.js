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

let r = prompt("Enter a radius.");
// console.log(r)

function circleArea(radius)
{
    return Math.PI * radius * radius;
}

let area = circleArea(r);
alert(`The area ${r} is ${area.toFixed(2)} `)

