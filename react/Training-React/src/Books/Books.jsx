import style from "./Books.module.css";
function Books(props) {
  return (
    <>
      <div className={style.card}>
        <img src={props.books} alt="Books" />
        <p>{props.bookName}</p>
        <p>{props.paise}</p>
      </div>
    </>
  );
}
export default Books;
