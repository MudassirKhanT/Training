import { useEffect, useState } from "react";
// import book1 from "../assets/book1.jpg";
// import book2 from "../assets/book2.jpg";
import Books from "./Books";
// import book2 from "../../src/assets/book2.jpg";
function Bookslist() {
  const [book, setBook] = useState([]);
  // const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3000/books")
        .then((res) => res.json())
        .then((data) => setBook(data))
        .catch((err) => console.log(err));
    }, 2000);
  }, []);

  //------------------Fetching Data From Json data-----------
  // useEffect(() => {
  //   fetch("http://localhost:3000/books")
  //     .then((res) => res.json())
  //     .then((data) => setBook(data))
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
  //   console.log("Use Effect called in booklist");
  // }, [book]);
  //console.log(Book);
  //Sort Based on Money
  // bookArray.sort((x, y) => y.paise - x.paise);
  //filter
  // const filteredBooks = bookArray.filter((x) => x.paise <= 2000);
  function handleDelete(id) {
    const newBooks = book.filter((e) => e.id != id);
    setBook(newBooks);
    // console.log("New:", newBooks);
  }
  const listOFBooks = book.map((b, index) => (
    // console.log(b);
    <Books key={index} image={b.image} bookName={b.bookName} paise={b.paise} id={b.id} delete={handleDelete} />
  ));
  console.log(listOFBooks);
  return <>{listOFBooks}</>;
}
export default Bookslist;
