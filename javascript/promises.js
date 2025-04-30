// const promise = new Promise((resolve, reject) => {
//   let random = Math.random();
//   if (random > 0.5) {
//     resolve(random);
//   } else {
//     reject(new Error(`The ${random} is lesser than 0.5`));
//   }
// });
// promise
//   .then((res) => {
//     console.log(`The Random Number is ${res}`);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//------------promise Chaining------------------
let h1 = document.getElementById("one");
let h2 = document.getElementById("two");
let h3 = document.getElementById("three");
let button = document.getElementById("btn");
button.addEventListener("click", () => {
  addColor(h1, "green", 1000)
    .then(() => {
      return addColor(h2, "blue", 2000);
    })
    .then(() => {
      return addColor(h3, "orange", 1000);
    })
    .then(() => {
      return addColor(h4, "pink", 1000);
    })
    .catch((err) => {
      console.log(err);
    });
});
const addColor = (ele, clr, time) => {
  return new Promise((resolve, reject) => {
    if (ele) {
      setTimeout(() => {
        ele.style.color = clr;
        resolve();
      }, time);
    } else {
      reject(new Error("No such element exists like:", ele));
    }
  });
};
