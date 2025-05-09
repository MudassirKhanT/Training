function Todo(props) {
  //   console.log(props.item);
  //   console.log(props.key);

  return (
    <>
      {props.index && (
        <>
          <div className="TodoContainer">
            <p>{props.item}</p>
            <button onClick={() => props.delete(props.index)}>Delete</button>
          </div>
        </>
      )}
    </>
  );
}
export default Todo;
