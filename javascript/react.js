// const arr = [
//   {
//     name: "mudassir",
//     age: 19,
//   },
//   {
//     name: "irfan",
//     age: 19,
//   },
//   {
//     name: "muni",
//     age: 19,
//   },
//   {
//     name: "affan",
//     age: 19,
//   },
//   {
//     name: "natraj",
//     age: 19,
//   },
// ];
// console.log(arr);
//-------MAP----AND----FILTER----- uses return keyword changed the data's VALUE to uppercase
// const upperCase = arr.map((e) => {
//   return e.name.toUpperCase();
// });
// console.log(upperCase);
// let BooksArray = [
//   {
//     id: 1,
//     book: "One",
//     price: 3000,
//   },
//   {
//     id: 2,
//     book: "Two",
//     price: 2000,
//   },
//   {
//     id: 3,
//     book: "Three",
//     price: 1000,
//   },
//   {
//     id: 4,
//     book: "Four",
//     price: 4000,
//   },
// ];

// let sum = 0;
// const total = BooksArray.map((e) => {
//   sum += e.price;
//   return sum;
// });
// console.log(total);

// console.log("Total Books Price:", sum)
//TAsk1------Cube the array
/***
 * Cube
 * Factorial
 * prime
 * even or odd
 */
// let arr = [1, 2, 3, 4];
// const cubes = arr.map((e) => {
//   return e ** 3;
// });

// const facts = arr.map((e) => {
//   return factorial(e);
// });
// function factorial(e) {
//   let fact = 1;
//   for (let i = 1; i <= e; i++) {
//     fact = fact * i;
//   }
//   return fact;
// }
// function isPrime(e) {
//   if (e < 2) {
//     return "Niether Prime Nor Not Prime";
//   }
//   for (let i = 2; i <= e / 2; i++) {
//     if (e % i == 0) {
//       return "Not Prime";
//     }
//   }
//   return "Prime";
// }

// const primes = arr.map((e) => {
//   return isPrime(e);
// });

// function check(e) {
//   if (e % 2 == 0) {
//     return "Even";
//   }
//   return "Odd";
// }
// const evenOrOdd = arr.map((e) => {
//   return check(e);
// });
// console.log(arr);
// console.log(cubes);
// console.log(facts);

// console.log("Prime Or Not Prime");
// console.log(arr);
// console.log(primes);

// console.log("Even Or Odd");
// console.log(arr);
// console.log(evenOrOdd);

//----------------FILTER METHOD---------------

// let BooksArray = [
//   {
//     id: 1,
//     book: "One",
//     price: 3000,
//   },
//   {
//     id: 2,
//     book: "Two",
//     price: 2000,
//   },
//   {
//     id: 3,
//     book: "Three",
//     price: 1000,
//   },
//   {
//     id: 4,
//     book: "Four",
//     price: 4000,
//   },
// ];
//Task 1

// const filteredData = BooksArray.filter((e) => {
//   return e.id % 2 == 0;
// });
// console.log(filteredData);

//Task 2 Perfect Square
// let arr = [1, 2, 3, 4, 5];
// function calc(e) {
//   squareRoot = e ** (1 / 2);
//   if (squareRoot ** 2 == e) {
//     return e;
//   }
// }
// const perfect = arr.filter((e) => {
//   return calc(e);
// });
// console.log(perfect);
//-------------------SPLICE-------------------
// let arr = ["mudassir", "khan", "muni", "irfan"];
// console.log(arr);
// arr.splice(1, 2, "Suheab", "Natraj");
// console.log(arr);
// const spliced = arr.map((e) => {
//   console.log(arr.indexOf(e));
//   if (arr.indexOf(e) % 2 == 0) {
//     return e;
//   }
// });
// console.log(spliced);

//2D to 1D
// let TwoD = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// let arr = [];
// for (let i = 0; i < TwoD.length; i++) {
//   for (let j = 0; j < TwoD.length; j++) {
//     arr.push(TwoD[i][j]);
//   }
// }
// console.log(arr);

// let BooksArray = [
//   {
//     id: 1,
//     book: "One",
//     price: 3000,
//   },
//   {
//     id: 2,
//     book: "Two",
//     price: 2000,
//   },
//   {
//     id: 3,
//     book: "Four",
//     price: 1000,
//   },
//   {
//     id: 4,
//     book: "Four",
//     price: 4000,
//   },
// ];
// let ans = [];
// const find = BooksArray.findIndex((e) => {
//   if (e.book == "Four") {
//     return ans.push(BooksArray.indexOf(e));
//   }
// });
// console.log(ans);

//-----------------Array Destructuring---------
// const name = ["mudassir", "khan", "tailor"];
// const [fName, lName, sName] = name;
// console.log(fName, lName, sName);
//-------------------Object Destructuring-------
// const myName = {
//   id: 1,
//   name: "Mudassir",
//   isStudent: true,
//   gender: "male",
// };
// const { id, name: FullName, isStudent, gender } = myName;
// const { id: Adhaar, name: FullName, isStudent: student, gender: Gender } = myName;
// console.log(Adhaar, FullName, student, Gender);

//-----------------------SPREAD OPERATORS(...arrayName)---------------------
//Syntax [...arrayName](copies into new arary)
//RETURNS ALWAYS FALSE when copyArr==Original
// const intro = ["my", "name", "is", "mudassir"];
// const copyArr = [...intro, "I", "am", "a", "student"];
// console.log(intro);
// console.log(copyArr);

//---------------------Fetch------------------
//---------------------JS PRomises------------
/***
 * File Operations
 * Network Data Expectations[API]
 *
 */
// const fetchData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (!res.ok) {
//       return new Error(res.status);
//     }
//     const result = await res.json();
//     return result;
//   } catch (e) {
//     console.log(e);
//   }
// };
// fetchData()
//   .then((res) => {
//     console.log("result:", res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//--------------Fetch-----------
// const fetchData = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//     if (!res.ok) {
//       return new Error("API Fetch Error In the URl Try Again");
//     }
//     const result = await res.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// };
// fetchData()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
