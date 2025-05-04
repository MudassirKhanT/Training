function Electronics(props) {
  return (
    <>
      <div className="card">
        <img src={props.img} alt="Hardware" />
        <p>{props.Electronicname}</p>
        <p>{props.price}</p>
        <button onClick={() => props.delete(props.id)}>Delete</button>
      </div>
    </>
  );
}
export default Electronics;
