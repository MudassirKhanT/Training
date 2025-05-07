function randomColor() {
  let blank = "";
  let hexCode = "123456789ABCDEF";

  for (let i = 0; i < 6; i++) {
    blank = blank + hexCode[Math.floor(Math.random() * 16)];
  }
  let color = "#" + blank;
  document.body.style.backgroundColor = color;
  let btn = document.getElementById("b");
  let head = document.getElementById("hex");
  btn.style.backgroundColor = color;
  head.innerText = color;
}
