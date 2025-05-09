import { doc, getDoc } from "firebase/firestore";
import { auth, dataBase } from "./Firebase";
import { useEffect, useState } from "react";

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const [bal, setBal] = useState(0);
  async function fetchData() {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(dataBase, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      const balRef = doc(dataBase, "Scores", user.uid);
      const balSnap = await getDoc(balRef);
      if (balSnap.exists()) {
        setBal(balSnap.data());
      } else {
        console.log("No Balance");
      }
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log("USer:", user);
      } else {
        console.log("user not logged in");
      }
    });
  }
  useEffect(() => {
    fetchData();
  }, []);
  // console.log("Userdetails", userDetails);
  console.log("Balance:", bal);

  async function Logout() {
    await auth.signOut();
    window.location.href = "/login";
  }

  return (
    <div>
      <>
        {userDetails ? (
          <>
            <p>Welcome to the site dude : {userDetails.email}</p>
            <p>Tera Pehla Naam : {userDetails.fname}</p>
            <p>Tera Akhri Naam : {userDetails.lname}</p>
          </>
        ) : (
          <p>Loading........</p>
        )}
        {bal ? (
          <>
            <p>Total Amount in the bank : {bal.balance}</p>
          </>
        ) : (
          <p>No Balance</p>
        )}
        <button onClick={Logout} className="btn btn-danger">
          Logout
        </button>
      </>
    </div>
  );
}
export default Profile;
