import { Link } from "react-router-dom";
function CreateUser() {
  function handleUser() {
    <Link to={"/users"}></Link>;
  }
  return (
    <>
      {/* <h1>Create an User</h1> */}
      <h1 className="create">Create An User</h1>
      <div className="createMain">
        <form action="" method="POST" className="createForm">
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter Name:" />
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" placeholder="Enter Email" />
          <label htmlFor="age">Age</label>
          <input type="number" name="age" id="age" />
          <button type="submit" onClick={handleUser}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
export default CreateUser;
