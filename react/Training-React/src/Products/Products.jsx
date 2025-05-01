import car from "./assets/car-4.avif";
function Products() {
  let price = 2000;
  return (
    <>
      <div className="card">
        <img src={car} alt="car" />
        <p>A Lengendary Car</p>
        {/* <p>$10000</p> */}
        <p>${price}</p>
      </div>
    </>
  );
}
export default Products;
