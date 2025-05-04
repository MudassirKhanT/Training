import { useState } from "react";

function Button() {
  const [count, setCount] = useState(2);
  function Play() {
    setCount(count ** 2);
  }
  return (
    <>
      <button className="btn" onClick={Play}>
        {count == 10 ? `count:${count}` : `count:${count}`}
      </button>
    </>
  );
}
export default Button;
