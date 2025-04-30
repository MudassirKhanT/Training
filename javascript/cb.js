// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log(3);
// }, 1000);
// console.log(4);
//-----------Call backs-------------
// function add(a, b) {
//   return a + b;
// }
// function calculate(a, b, cb) {
//   console.log("Result:", cb(a, b));
// }
// calculate(10, 20, add);
// function multiply(a, b) {
//   return a * b;
// }
// function calc(a, b, cb) {
//   console.log("product:", cb(a, b));
// }
// calc(10, 20, multiply);

//----------------CB Hell---------------
// let head1 = document.getElementById("one");
// let head2 = document.getElementById("two");
// let head3 = document.getElementById("three");
// let button = document.getElementById("btn");
// button.addEventListener("click", () => {
//   setTimeout(() => {
//     head1.style.color = "red";
//     setTimeout(() => {
//       head2.style.color = "green";
//       setTimeout(() => {
//         head3.style.color = "yellow";
//       }, 1000);
//     }, 5000);
//   }, 1000);
// });
