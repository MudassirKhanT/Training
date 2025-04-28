// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
// let num = prompt("enter num:");
// let sum = 0;
// for (let i = 0; i <= num; i++) {
//   sum += i;
// }
// console.log(sum);
// let i = 1;
// while (i <= num) {
//   if (i % 2 == 0) {
//     console.log(`Mudassir ${i}`);
//   }
//   i += 1;
// }
// let i = 0;
// do {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
//   i++;
// } while (i <= num);
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} * ${i} = ${num * i}`);
// }
//---------------------FOR OF LOOP (For Element in Loop) -------------------
// let name = ["khan", "mudassir"];
// n = {
//   fN: "Mudassir",
//   lN: "Khan",
//   age: 21,
// };
// for (let i of name) {
//   console.log(i);
// }
//----------------Task 1---------
// let cnt = 0;
// for (let i of name) {
//   cnt += 1;
// }
// console.log(cnt);
//----------------------For In Loop------------------------------------
// for (let i in n) {
//   console.log(`${i}:${n[i]}`);
// }
let secret = 9;
while (true) {
  let num = prompt("Enter the number:");
  if (num == secret) {
    console.log("Found the number");
    break;
  }
}
