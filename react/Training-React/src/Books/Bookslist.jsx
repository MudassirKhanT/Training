import { useEffect, useState } from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import Books from "./Books";
// import book2 from "../../src/assets/book2.jpg";

function Bookslist() {
  const [book, setBook] = useState([
    {
      id: 1,
      image: book1,
      bookName: "Data Structure & Algorithm",
      paise: 999,
    },
    {
      id: 2,
      image: book2,
      bookName: "Computer Networks",
      paise: 1999,
    },
    {
      id: 3,
      image: book1,
      bookName: "Object Oriented using Java",
      paise: 2999,
    },
    {
      id: 4,
      image: book2,
      bookName: "Operating System",
      paise: 3999,
    },
  ]);
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
