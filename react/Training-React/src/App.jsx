import "./App.css";
import Books from "./Books/Books";
import Products from "./Products/Products";
// import Footer from "./Footer.jsx";

// import Navbar from "./Navbar.jsx";
import car1 from "./assets/die1.jpg";
import car2 from "./assets/die2.jpg";
import car3 from "./assets/die3.jpg";
import car4 from "./assets/die4.jpg";
// import car5 from "./assets/die5.jpg";
// import die6 from "./assets/die6.jpg";
import book1 from "./assets/book1.jpg";
import book2 from "./assets/book2.jpg";

function App() {
  return (
    <>
      {/* <Navbar />
      <Footer /> */}
      <Products image={car1} name="ModelY" price="$1000" />
      <Products image={car2} name="ModelA" price="$2000" />
      <Products image={car3} name="ModelB" price="$3000" />
      <Products image={car4} name="ModelC" price="$4000" />
      {/* <Products image={die6} name="ModelD" price="$5000" /> */}
      <Books books={book1} bookName="Data Structure & Algorithm" paise="999" />
      <Books books={book2} bookName="Computer Networks" paise="1999" />
      <Books books={book1} bookName="Object Oriented using Java" paise="2999" />
      <Books books={book2} bookName="Operating System" paise="3999" />
    </>
  );
}

export default App;
