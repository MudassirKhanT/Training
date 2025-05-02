import "./App.css";
import Products from "./Products/Products";
// import Footer from "./Footer.jsx";

// import Navbar from "./Navbar.jsx";
import car1 from "./assets/die1.jpg";
import car2 from "./assets/die2.jpg";
import car3 from "./assets/die3.jpg";
import car4 from "./assets/die4.jpg";
// import car5 from "./assets/die5.jpg";
import die6 from "./assets/die6.jpg";

function App() {
  return (
    <>
      {/* <Navbar />
      <Footer /> */}
      <Products image={car1} name="ModelY" price="$1000" />
      <Products image={car2} name="ModelA" price="$2000" />
      <Products image={car3} name="ModelB" price="$3000" />
      <Products image={car4} name="ModelC" price="$4000" />
      <Products image={die6} name="ModelD" price="$5000" />
    </>
  );
}

export default App;
