const prime = (num) => {
  let isPrime = true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime === true) {
    return true;
  } else {
    return false;
  }
};
let num = parseInt(prompt("Enter a num:"));
if (prime(num)) {
  console.log(num, "Is a prime number");
} else {
  for (let i = num - 1; i > 1; i--) {
    if (prime(i)) {
      console.log(`The nearset prime of ${num} is ${i}`);
      break;
    }
  }
}
