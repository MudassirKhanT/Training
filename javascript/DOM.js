/***
 * Class selectors
 * Id
 * Query
 * query all
 */

// let para = document.getElementsByClassName("p1")[1];
// //Returns HTML Collection
// console.log(para);
// para.style.color = "red";
// para.style.fontSize = "40px";
// para.style.background = "yellow";
// para.innerHTML = "<h1>Welcome to Dom</h1>";
// let box = document.querySelector(".div")[0];
// console.log(box);
// for (let i = 0; i <= 3; i++) {
//   let myClass = document.getElementsByClassName("div")[i];
//   myClass.innerText = `Box Number ${i}`;
//   myClass.style.color = "black";
//   myClass.style.backgroundColor = "yellow";
// }

// let i = 99;
// let para1 = document.getElementsByClassName("p")[0];

// while (i > 0) {
//   para1.innerText =
//     para1.innerText +
//     `${i} bottels of beer on the wall, ${i} bottles of beer.
//  Take one down and pass it around, ${i - 1} bottles of beer on the wall`;
//   i -= 1;
// }
// let div = document.createElement("div");
// div.style.height = "100px";
// div.style.width = "100px";
// div.style.backgroundColor = "orange";
// document.body.appendChild(div);
// div.style.position = "relative";
// div.style.left = "300px";
// console.log(div);
// function brick() {
//   let div = document.createElement("div");
//   div.style.height = "50px";
//   div.style.width = "50px";
//   div.style.backgroundColor = "red";

//   div.style.border = "1px solid black";
//   document.body.style.display = "flex";
//   document.body.style.flexWrap = "wrap";
//   document.body.appendChild(div);
// }
//---------------SetAttribute-------------------
// let image = document.getElementById("img");
// image.setAttribute("src", "/Training/assets/amazon.png");
// let num = parseInt(prompt("Enter a Num:"));
// let image = document.getElementById("img");
// if (num % 2 == 0) {
//   image.setAttribute("src", "/Training/assets/mac.jpg");
// } else {
//   image.setAttribute("src", "/Training/assets/chart.png");
// }
// let inp = document.getElementById("num").value;
// console.log(inp);
// if (inp % 2 == 0) {
//   image.setAttribute("src", "/Training/assets/mac.jpg");
// } else {
//   image.setAttribute("src", "/Training/assets/chart.png");
// }
//----------------------task----------------

// function create() {
//   let num = document.getElementById("num").value;
//   console.log("NUmber:", num);
//   for (let i = 0; i < num; i++) {
//     let div = document.createElement("div");
//     div.style.height = "100px";
//     div.style.width = "100px";
//     div.style.border = "1px solid black";
//     div.style.margin = "10px";
//     document.body.appendChild(div);
//   }
// }
let name1 = prompt("Enter Name1:");
let name2 = prompt("Enter Name2:");
let arr = [1, 2, 3, 4, 5, 6];
let random1 = Math.floor(Math.random() * 6);
let random2 = Math.floor(Math.random() * 6);
let d1 = arr[random1];
let d2 = arr[random2];
let div1 = document.createElement("div");
div1.style.height = "100px";
div1.style.width = "100px";
div1.style.border = "1px solid black";
div1.style.margin = "5px";
div1.innerText = random1;
document.body.appendChild(div1);
let div2 = document.createElement("div");
div2.style.height = "100px";
div2.style.width = "100px";
div2.style.border = "1px solid black";
div2.style.margin = "5px";
div2.innerText = random2;
document.body.appendChild(div2);
let heading = document.getElementById("h");
if (random1 > random2) {
  heading.innerText = `${name1} Won`;
} else if (random2 > random1) {
  heading.innerText = `${name2} Won`;

  // document.heading.innerText = `${name2} Won`;
} else {
  heading.innerText = `${name1}and ${name2} Tie`;

  // document.heading.innerText = `${name1} and ${name2} Tie`;
}
