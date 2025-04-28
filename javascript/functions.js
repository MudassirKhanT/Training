// function greet() {
//   //   console.log("Welcome!");
//   return "Welcome!";
// }
// console.log(greet());

// function square(num) {
//   return num * num;
// }
// let num = 5;
// console.log(square(num));
//---------------------2nd  way funtion expression-------------
// const greet = function () {
//   console.log("Welcome!");
// };
// greet();
// const greet = function (name) {
//   console.log(`Welcome ${name}`);
// };
// greet("Mudassir");
//--------------------3rd way Arrow Function------------------
// const greet = (name) => {
//   console.log(`Welcome Home ${name}`);
// };
// greet("Mudassir");
// const schedule = (matches) => {
//   let cnt = 0;
//   for (let i = 0; i < matches.length; i++) {
//     for (let j = i + 1; j < matches.length; j++) {
//       console.log(`${matches[i]} v/s ${matches[j]}`);
//       cnt += 1;
//     }
//   }
//   console.log(cnt);
// };
// let matches = ["csk", "rcb", "srh", "mi", "gt", "dc", "lsg", "kkr", "rr", "pbks"];
// schedule(matches);
const greet = (name) => console.log(`welcome ${name}`);
greet("Mudassir");
