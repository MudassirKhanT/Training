function Snake() {
  //   let player1 = prompt("Enter name of player1:");
  //   let player2 = prompt("Enter name of player2:");
  let cnt = 1;
  let cnt2 = 1;

  let p2 = document.createElement("div");
  p2.style.height = "10px";
  p2.style.width = "10px";
  p2.style.backgroundColor = "blue";
  p2.style.borderRadius = "50%";
  p2.style.marginRight = "5px";
  let tile = document.getElementsByClassName(`div${cnt}`)[0];
  tile.appendChild(p2);
  let p1 = document.createElement("div");
  p1.style.height = "10px";
  p1.style.width = "10px";
  p1.style.backgroundColor = "red";
  p1.style.borderRadius = "50%";
  tile.appendChild(p1);
  let chance = 1;
  function dice() {
    const audio = new Audio("/assets/dice.mp3");
    audio.play();
  }
  function win() {
    const audio = new Audio("/assets/win.mp3");
    audio.play();
  }
  function snake() {
    const audio = new Audio("/assets/snake.mp3");
    audio.play();
  }

  function roll() {
    dice();
    if (chance == 1) {
      let img = document.getElementById("image");
      img.style.display = "block";
    }
    //player 1
    if (chance % 2 != 0) {
      let random = 1 + Math.floor(Math.random() * 6);
      let img = document.getElementById("image");
      img.setAttribute("src", `/assets/die${random}.jpg`);
      if (cnt + random <= 100) {
        cnt += random;
      }
      if (random == 6) {
        chance += 1;
      }
      if (cnt == 4) {
        win();
        cnt = 25;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 13) {
        snake();
        cnt = 46;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 27) {
        snake();
        cnt = 5;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 33) {
        win();
        cnt = 49;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 40) {
        snake();
        cnt = 3;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 42) {
        win();
        cnt = 63;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 43) {
        snake();
        cnt = 18;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 50) {
        win();
        cnt = 69;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 54) {
        snake();
        cnt = 31;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 62) {
        win();
        cnt = 81;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 66) {
        snake();
        cnt = 45;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 74) {
        snake();
        win();
        cnt = 92;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 76) {
        snake();
        cnt = 58;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 89) {
        snake();
        cnt = 53;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 99) {
        snake();
        cnt = 41;
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
      } else if (cnt == 100) {
        win();
        let tile = document.getElementsByClassName(`div${cnt}`)[0];
        tile.appendChild(p1);
        alert(`Player1 : ${player1} You Won the match`);
        document.getElementsByClassName("div1")[0].appendChild(p1);
        document.getElementsByClassName("div1")[0].appendChild(p2);
      }
      console.log("RR:", random);

      console.log(cnt);

      let tile = document.getElementsByClassName(`div${cnt}`)[0];
      tile.appendChild(p1);
      chance += 1;
    } else {
      let random = 1 + Math.floor(Math.random() * 6);
      let img = document.getElementById("image");
      img.setAttribute("src", `/assets/die${random}.jpg`);
      if (random == 6) {
        chance += 1;
      }
      if (cnt2 + random <= 100) {
        cnt2 += random;
      }
      if (cnt2 == 4) {
        win();
        cnt2 = 25;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 13) {
        win();
        cnt2 = 46;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 27) {
        snake();
        cnt2 = 5;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 33) {
        win();
        cnt2 = 49;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 40) {
        snake();
        cnt2 = 3;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 42) {
        win();
        cnt2 = 63;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 43) {
        snake();
        cnt2 = 18;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 50) {
        win();
        cnt2 = 69;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 54) {
        snake();
        cnt2 = 31;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 62) {
        win();
        cnt2 = 81;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 66) {
        snake();
        cnt2 = 45;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 74) {
        win();
        cnt2 = 92;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 76) {
        snake();
        cnt2 = 58;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 89) {
        snake();
        cnt2 = 53;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 99) {
        snake();
        cnt2 = 41;
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
      } else if (cnt2 == 100) {
        win();
        let tile = document.getElementsByClassName(`div${cnt2}`)[0];
        tile.appendChild(p2);
        alert(`Player2 : ${player2} Won the match`);
        document.getElementsByClassName("div1")[0].appendChild(p1);
        document.getElementsByClassName("div1")[0].appendChild(p2);
      }
      console.log("RB:", random);

      console.log(cnt);

      let tile = document.getElementsByClassName(`div${cnt2}`)[0];
      tile.appendChild(p2);
      chance += 1;
    }
  }
  return (
    <>
      <h1 className="game">Snake And Ladders Game</h1>
      <div className="main">
        <div className="container">
          <div className="div100">100</div>
          <div className="div99">99</div>
          <div className="div98">98</div>
          <div className="div97">97</div>
          <div className="div96">96</div>
          <div className="div95">95</div>
          <div className="div94">94</div>
          <div className="div93">93</div>
          <div className="div92">92</div>
          <div className="div91">91</div>
          <div className="div81">81</div>
          <div className="div82">82</div>
          <div className="div83">83</div>
          <div className="div84">84</div>
          <div className="div85">85</div>
          <div className="div86">86</div>
          <div className="div87">87</div>
          <div className="div88">88</div>
          <div className="div89">89</div>
          <div className="div90">90</div>
          <div className="div80">80</div>
          <div className="div79">79</div>
          <div className="div78">78</div>
          <div className="div77">77</div>
          <div className="div76">76</div>
          <div className="div75">75</div>
          <div className="div74">74</div>
          <div className="div73">73</div>
          <div className="div72">72</div>
          <div className="div71">71</div>
          <div className="div61">61</div>
          <div className="div62">62</div>
          <div className="div63">63</div>
          <div className="div64">64</div>
          <div className="div65">65</div>
          <div className="div66">66</div>
          <div className="div67">67</div>
          <div className="div68">68</div>
          <div className="div69">69</div>
          <div className="div70">70</div>
          <div className="div60">60</div>
          <div className="div59">59</div>
          <div className="div58">58</div>
          <div className="div57">57</div>
          <div className="div56">56</div>
          <div className="div55">55</div>
          <div className="div54">54</div>
          <div className="div53">53</div>
          <div className="div52">52</div>
          <div className="div51">51</div>
          <div className="div41">41</div>
          <div className="div42">42</div>
          <div className="div43">43</div>
          <div className="div44">44</div>
          <div className="div45">45</div>
          <div className="div46">46</div>
          <div className="div47">47</div>
          <div className="div48">48</div>
          <div className="div49">49</div>
          <div className="div50">50</div>
          <div className="div40">40</div>
          <div className="div39">39</div>
          <div className="div38">38</div>
          <div className="div37">37</div>
          <div className="div36">36</div>
          <div className="div35">35</div>
          <div className="div34">34</div>
          <div className="div33">33</div>
          <div className="div32">32</div>
          <div className="div31">31</div>
          <div className="div21">21</div>
          <div className="div22">22</div>
          <div className="div23">23</div>
          <div className="div24">24</div>
          <div className="div25">25</div>
          <div className="div26">26</div>
          <div className="div27">27</div>
          <div className="div28">28</div>
          <div className="div29">29</div>
          <div className="div30">30</div>
          <div className="div20">20</div>
          <div className="div19">19</div>
          <div className="div18">18</div>
          <div className="div17">17</div>
          <div className="div16">16</div>
          <div className="div15">15</div>
          <div className="div14">14</div>
          <div className="div13">13</div>
          <div className="div12">12</div>
          <div className="div11">11</div>
          <div className="div1">1</div>
          <div className="div2">2</div>
          <div className="div3">3</div>
          <div className="div4">4</div>
          <div className="div5">5</div>
          <div className="div6">6</div>
          <div className="div7">7</div>
          <div className="div8">8</div>
          <div className="div9">9</div>
          <div className="div10">10</div>
        </div>
        <button id="btn" onClick={roll}>
          Start
        </button>
        <h1 id="head"></h1>
      </div>
      <img src="" alt="" id="image" height="100px" width="100px" />
    </>
  );
}
export default Snake;
