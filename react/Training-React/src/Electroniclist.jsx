import { useState } from "react";
import Electronics from "./Electronics";
import image1 from "./assets/h1.jpg";
import image2 from "./assets/h2.jpg";
import image3 from "./assets/h3.jpg";
function Elecroniclist() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: image1,
      name: "CPU",
      price: 500,
    },
    {
      id: 2,
      image: image2,
      name: "RAM",
      price: 150,
    },
    {
      id: 3,
      image: image3,
      name: "ROM",
      price: 250,
    },
  ]);
  function handleDelete(id) {
    const newHardwares = items.filter((e) => e.id != id);
    setItems(newHardwares);
  }

  const listOfElectronic = items.map((e, index) => <Electronics key={index} img={e.image} Electronicname={e.name} price={e.price} id={e.id} delete={handleDelete} />);
  console.log(listOfElectronic);

  return <>{listOfElectronic}</>;
}
export default Elecroniclist;
