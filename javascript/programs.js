// const prime = (num) => {
//   let isPrime = true;
//   for (let i = 2; i <= num / 2; i++) {
//     if (num % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime === true) {
//     return true;
//   } else {
//     return false;
//   }
// };
// let num = parseInt(prompt("Enter a num:"));
// if (prime(num)) {
//   console.log(num, "Is a prime number");
// } else {
//   for (let i = num - 1; i > 1; i--) {
//     if (prime(i)) {
//       console.log(`The nearset prime of ${num} is ${i}`);
//       break;
//     }
//   }
// }
/***
 *
 */
// function fib(num) {
//   let a = 0;
//   let b = 1;
//   let c = a + b;
//   while (num != 0) {
//     console.log(a);
//     a = b;
//     b = c;
//     num--;
//   }
// }
// let num = parseInt(prompt("Enter a number:"));
// fib(num);

// let exp = parseInt(prompt("Enter exp:"));

// if (num % 4 == 0 || num % 100 == 0 || num % 400 == 0) {
//   console.log(`${num} is a leap`);
// } else {
//   console.log(`${num} is not a leap`);
// }
// function fact(num) {
//   let f = 1;
//   for (let i = 1; i <= num; i++) {
//     f *= i;
//   }
//   console.log(f);
//   return f;
// }
// function digit(num) {
//   let sum = 0;
//   let temp = num;
//   while (num != 0) {
//     let ld = num % 10;
//     sum += fact(ld);
//     num = Math.floor(num / 10);
//   }

//   if (sum == temp) {
//     console.log("It is a strong Num");
//   } else {
//     console.log("It is not a strong num");
//   }
// }
// digit(num);
// let bonus = 0;
// if (exp >= 10) {
//   bonus = num * 0.1;
//   console.log(`Salary:${num}\n Exp:${exp}\n Bonus:${bonus} Total:${num + bonus}`);
// } else if (exp >= 6 && exp < 10) {
//   bonus = num * 0.08;
//   console.log(`Salary:${num}\n Exp:${exp}\n Bonus:${bonus} Total:${num + bonus}`);
// } else {
//   bonus = num * 0.05;
//   console.log(`Salary:${num}\n Exp:${exp}\n Bonus:${bonus} Total:${num + bonus}`);
// }
// let num = parseInt(prompt("Enter Salary:"));
// let s = num.toString();
// let ans = "";
// for (let i = s.length() - 1; i >= 0; i++) {
//   ans += s[i];
// }
// if (ans === s) {
//   console.log("palidrome");
// } else {
//   console.log("Not palindrom");
// }
