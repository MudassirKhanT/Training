// import { useEffect, useState } from "react";
// import book1 from "../assets/book1.jpg";
// import book2 from "../assets/book2.jpg";
import UseFetch from "../UseFetch";
import Books from "./Books";
import loader from "../../Data/assets/loader.jpeg";
// import book2 from "../../src/assets/book2.jpg";
function Bookslist() {
  const [book, setBook, error] = UseFetch("http://localhost:3000/books");
  // const [loading, setLoading] = useState(false);

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

  if (!book) {
    return <>{error ? <p>Error while fetching the data the error is = {error}</p> : <img src={loader} />}</>;
  }

  const listOFBooks = book.map((b, index) => (
    // console.log(b);
    <Books key={index} image={b.image} bookName={b.bookName} paise={b.paise} id={b.id} delete={handleDelete} />
  ));
  console.log(listOFBooks);
  return <>{listOFBooks}</>;
}
export default Bookslist;
