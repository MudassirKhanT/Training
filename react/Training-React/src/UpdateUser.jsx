import { Link } from "react-router-dom";

function UpdateUser() {
  function handleUpdate() {
    <Link to={"/users"}></Link>;
  }
  return (
    <>
      <h1 className="update">Update User</h1>
      <div className="createMain">
        <form action="" method="POST" className="createForm">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter Name:" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Email" />
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" />
          <button type="submit" onClick={handleUpdate}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default UpdateUser;
