import React, { useEffect, useState } from "react";

function FetchData() {
  const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);

  // Fetch data when component mounts
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users") // Sample API
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        // setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        // setLoading(false);
      });
  }, []);

  // if (loading) return <p>Loading users...</p>;

  return (
    <div>
      <h2>User List</h2>

      {users.map((user) => (
        <li>
          <strong>{user.name}</strong> - {user.email}
        </li>
      ))}
    </div>
  );
}

export default FetchData;
