import { useState } from "react";
import { Link } from "react-router-dom";

function User() {
  const [users, setUsers] = useState([
    {
      name: "mudassir",
      email: "mudassirkhan@gmail.com",
      age: 20,
    },
  ]);
  console.log(users);

  return (
    <>
      <div className="tableContainer">
        <h1>Users table</h1>

        <table border={3}>
          <thead>
            <tr>
              <th>S.No</th>
              <th>name</th>
              <th>email</th>
              <th>age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((e, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.age}</td>
                <td>
                  <Link to={"/create"}>Add User</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to={"/update"}>Update User</Link>
      </div>
    </>
  );
}
export default User;
