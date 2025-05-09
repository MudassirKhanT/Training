import img1 from "./assets/die1.jpg";
import img2 from "./assets/die2.jpg";
import img3 from "./assets/die3.jpg";
import img4 from "./assets/die4.jpg";
import img5 from "./assets/die5.jpg";
import img6 from "./assets/die6.jpg";
import win from "./assets/win.mp3";
import lost from "./assets/snake.mp3";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, dataBase } from "./Firebase";
import { useState } from "react";
// import { useState } from "react";

function Seven() {
  const [finalbal, setFinalBal] = useState(0);
  // const [balance, setBalance] = useState(0);

  let choice = "";
  function sevenUp() {
    choice = "7up";
    document.getElementById("seven").style.display = "none";
    document.getElementById("seven-down").style.display = "none";
    document.getElementById("seven-up").style.display = "block";
  }
  function seven() {
    choice = "7";
    document.getElementById("seven").style.display = "block";
    document.getElementById("seven-down").style.display = "none";
    document.getElementById("seven-up").style.display = "none";
  }
  function sevenDown() {
    choice = "7down";
    document.getElementById("seven").style.display = "none";
    document.getElementById("seven-down").style.display = "block";
    document.getElementById("seven-up").style.display = "none";
  }

  async function roll(e) {
    const audio = document.getElementById("sound");
    const loser = document.getElementById("hodgaya");
    let l = [1, 2, 3, 4, 5, 6];
    let r1 = Math.floor(Math.random() * 5);
    let r2 = Math.floor(Math.random() * 5);
    let d1 = l[r1];
    let d2 = l[r2];
    console.log(d1, d2);
    let balance = 0;
    let inputVal = document.getElementById("in").value;
    let DiesImages = [img1, img2, img3, img4, img5, img6];
    let i1 = document.getElementById("img1");
    i1.setAttribute("src", DiesImages[d1]);
    let i2 = document.getElementById("img2");
    i2.setAttribute("src", DiesImages[d2]);
    if (d1 + d2 == 7 && choice == "7") {
      audio.play();
      document.getElementById("head").innerHTML = `You Won Exact 7 Balance is:${(balance += inputVal * 3)}`;

      document.getElementById("seven-up").style.display = "block";
      document.getElementById("seven-down").style.display = "block";
    } else if (d1 + d2 < 7 && choice == "7down") {
      audio.play();
      document.getElementById("head").innerHTML = `You Won Exact 7down Balance is:${(balance += inputVal * 2)}`;
      document.getElementById("seven-up").style.display = "block";
      document.getElementById("seven").style.display = "block";
    } else if (d1 + d2 > 7 && choice == "7up") {
      audio.play();
      document.getElementById("head").innerHTML = `You Won Exact 7up Balance is:${(balance += inputVal * 2)}`;
      document.getElementById("seven-down").style.display = "block";
      document.getElementById("seven").style.display = "block";
    } else {
      loser.play();
      document.getElementById("head").innerHTML = `You Lost Balance is:${(balance = balance - inputVal)}`;
      document.getElementById("seven-up").style.display = "block";
      document.getElementById("seven").style.display = "block";
      document.getElementById("seven-down").style.display = "block";
    }
    e.preventDefault();

    try {
      const user = auth.currentUser;
      await setDoc(doc(dataBase, "Scores", user.uid), {
        balance: balance,
      });
      const balRef = doc(dataBase, "Scores", user.uid);
      console.log(balRef, "balRef");

      const balSnap = await getDoc(balRef);
      console.log(balSnap, "balSnap");

      if (balSnap.exists()) {
        console.log("Exist");
        setFinalBal(balSnap.data());
      } else {
        console.log("Not Exists");
        setFinalBal(0);
      }
    } catch (err) {
      console.log(err.message);
    }
  }
  console.log("FinalBal:", finalbal);

  return (
    <>
      <div className="mainSeven">
        <center>
          <h1>Seven Up Seven Down</h1>
        </center>
        <div className="choice">
          <div id="seven-up" onClick={sevenUp}>
            7 Up
          </div>
          <div id="seven" onClick={seven}>
            7
          </div>
          <div id="seven-down" onClick={sevenDown}>
            7 Down
          </div>
        </div>
        <div className="inputs">
          <input type="text" id="in" placeholder="Enter the bet" />
          <button onClick={roll}>Start The Game</button>
        </div>

        <div className="images">
          <img id="img1" className="rotate linear infinite" />
          <img id="img2" className="rotate linear infinite" />
        </div>
        <h1 id="head"></h1>
        <audio src={win} id="sound"></audio>
        <audio src={lost} id="hodgaya"></audio>
      </div>
    </>
  );
}
export default Seven;
