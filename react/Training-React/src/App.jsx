import { useEffect } from "react";
import "./App.css";
// import Button from "./Button";
import Bookslist from "./Books/Bookslist";
import Login from "./Login";
import SignUp from "./SignUp";
// import Elecroniclist from "./Electroniclist";
// import FetchData from "./FetchData";
// import Books from "./Books/Books";

// import Products from "./Products/Products";
// import Footer from "./Footer.jsx";

// import Navbar from "./Navbar.jsx";
// import car1 from "./assets/die1.jpg";
// import car2 from "./assets/die2.jpg";
// import car3 from "./assets/die3.jpg";
// import car4 from "./assets/die4.jpg";
// import car5 from "./assets/die5.jpg";
// import die6 from "./assets/die6.jpg";

function App() {
  useEffect(() => {
    console.log("use effect caaled in app");
  });
  return (
    <>
      {/* <FetchData /> */}
      {/* <Elecroniclist /> */}
      {/* <Button /> */}
      {/* <Navbar />
      <Footer /> */}
      {/* <Products image={car1} name="ModelY" price="$1000" show={true} /> */}
      {/* <Products image={car2} name="ModelA" price="$2000" show={true} />
      <Products image={car3} name="ModelB" price="$3000" show={true} />
      <Products image={car4} name="ModelC" price="$4000" show={true} /> */}
      {/* <Products image={die6} name="ModelD" price="$5000" /> */}
      {/* <Bookslist /> */}
      <Login />
      <SignUp />
    </>
  );
}

export default App;
