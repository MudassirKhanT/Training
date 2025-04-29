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
function brick() {
  let div = document.createElement("div");
  div.style.height = "50px";
  div.style.width = "50px";
  div.style.backgroundColor = "red";

  div.style.border = "1px solid black";
  document.body.style.display = "flex";
  document.body.style.flexWrap = "wrap";
  document.body.appendChild(div);
}
