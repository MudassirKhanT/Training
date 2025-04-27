/***
 * Var=Ressign and Redeclare Is Possible
 * Var=Global Scope
 * Let=Only Ressign Is Possible
 * Let=Block Scope
 */

/***
 * With Var Keyword:-Redeclaration of variable is possible
 * and we can re assign
 * it is global scope
 */
// var fullName = "mudassirKhanTailor";
// var fullName = "khan";
// // console.log("fullName:", fullName);

// {
//   var n = 100;
//   console.log(fullName);
// }
// console.log(n);

/***
 * Instead use Let or Const
 * Let=we can't redeclare
 * block level scope
 * in let re assign is possible
 */

// let fName = "Mudassir";
// let fName = "tmk";
// //Error due to same redeclaration
// fName = "khan";
// console.log("fName:", fName);

// {
//   let n = "muddu";

//   console.log(n);
// }
// name = n;
// console.log(name);

/***
 * CONST is a constant
 * Reassign and Redeclaration is not possible
 * Block level Scope
 */

// const fName = "Mudassir Khan Tailor";
// console.log(fName);
// // fName = "apple";
// {
//   const fruit = "apple";
//   console.log(fName, "Khan");
// }
// console.log(fruit);
