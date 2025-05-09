import { useState } from "react";
import Todo from "./Todo";

function TodoList() {
  const [data, setData] = useState([{}]);
  const [input, setinput] = useState("");
  function handleinput(e) {
    setinput(e.target.value);
  }
  // function handleForm() {

  // }
  function dataAppend(e) {
    e.preventDefault();
    let size = data.length;
    const newTask = {
      id: size + 1,
      product: input,
    };
    setData((data) => [...data, newTask]);
    setinput("");
    // setData(e.target.value);
    // console.log(e.target.value);
  }

  function handleDelete(id) {
    const newData = data.filter((e) => e.id != id);
    setData(newData);
  }
  //   const ans = data.map((e) => console.log(e.id));
  //   console.log("Ans:", ans);
  const listOfTodos = data.map((e) => <Todo key={e.id} index={e.id} item={e.product} delete={handleDelete} />);
  return (
    <>
      <div className="tContainer">
        <form action="" className="todoForm" onSubmit={dataAppend}>
          <input type="text" name="prod" placeholder="Enter Task" value={input} onChange={handleinput} />
          <button>Submit</button>
        </form>
      </div>
      <h1>Tasks</h1>
      <hr />
      {listOfTodos}
    </>
  );
}
export default TodoList;
