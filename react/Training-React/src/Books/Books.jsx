import { useEffect, useState } from "react";
import style from "./Books.module.css";
function Books(props) {
  const [purchased, setPurchased] = useState(false);
  const [discount, setDiscount] = useState(0);
  const [price, setPrice] = useState(props.paise);
  function buyNow(discount) {
    setPrice(price - price * 0.2);
    setDiscount(discount);
    // console.log(price - amount, "hhh");
    console.log(`purchased ${props.bookName} with discount ${discount} : Rs ${price}`);
    setPurchased(true);
  }
  // console.log("dis:", discount);
  // console.log("Pr:", price);

  // const [count, setCount] = useState(100);
  let random = Math.floor(Math.random() * 101);
  // useEffect(() => {
  //   console.log("UseEffect called in Books");
  // }, [purchased]);
  return (
    <>
      {props.id && (
        <div className={style.card}>
          <img src={props.image} alt="Books" />
          <p>{props.bookName}</p>
          <p>{props.paise}</p>
          {/* <button onClick={() => setCount(count - 1)}>{count}</button> */}
          <p>{purchased ? "purchased" : "Get it now"}</p>
          <button onClick={() => buyNow(random)}>Buy Now</button>
          <p>{discount ? `After discount ${price}` : "no discount"}</p>
          <button onClick={() => props.delete(props.id)}>Delete</button>
        </div>
      )}
    </>
  );
}
export default Books;
