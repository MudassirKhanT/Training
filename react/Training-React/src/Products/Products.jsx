import style from "./Products.module.css";
// import car from "../assets/car-4.avif";
function Products(props) {
  return (
    <>
      <div className={style.card}>
        <img src={props.image} alt="car" />
        <p>{props.name}</p>

        <p>${props.price}</p>
      </div>
    </>
  );
}
export default Products;
