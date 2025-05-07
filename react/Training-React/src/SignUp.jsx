import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";
import { auth, dataBase } from "./Firebase";
// import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignUp() {
  const providers = new GoogleAuthProvider();

  //   const navigate = useNavigate();
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  let SignUpPassword = "";
  function handlePassword(event) {
    setPass(event.target.value);
    console.log(event.target.value);
    // SignUpPassword += event.target.value;
  }
  function handleEmail(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
    // SignUpPassword += event.target.value;
  }
  //   console.log("SignUpPassword:", SignUpPassword);
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, pass);
      const user = auth.currentUser;
      // toast.success("User Registered SuccessFully", {
      //   position: "bottom-center",
      // });
      console.log("user registered:", user);
      await setDoc(doc(dataBase, "Users", user.uid), {
        email: email,
        fname: fname,
        lname: lname,
      });
    } catch (err) {
      console.log("Errors:", err.message);
      // toast.error("User Registered Failed", {
      //   position: "bottom-center",
      // });
    }
  }
  //   SignUpPassword = pass;
  //   console.log("SignUpPassword:", SignUpPassword);
  function signUpWithGoogle() {
    console.log(auth, providers);
    signInWithPopup(auth, providers);
    console
      .log(auth, providers)
      .then((res) => console.log("User Successfully Registered with google:", res.user))
      .catch((err) => console.log(err.message));
  }
  return (
    <>
      <div className="signUpContainer">
        <h1>Sign Up</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="fName">
            <label htmlFor="fname">First-Name</label>
            <input value={fname} onChange={(e) => setFname(e.target.value)} type="text" name="email" id="fname" placeholder="Enter First-Name:" />
          </div>
          <div className="lName">
            <label htmlFor="lname">Last-Name</label>
            <input value={lname} onChange={(e) => setLname(e.target.value)} type="text" name="lname" id="lname" placeholder="Enter Last-Name" />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={handleEmail} type="text" name="email" id="email" placeholder="Enter Email" />
          </div>
          <div className="Password">
            <label htmlFor="pass">Password</label>
            <input value={pass} onChange={handlePassword} type="password" name="password" id="pass" placeholder="Enter Password" />
          </div>
          <div className="google">
            <button className="submit" onClick={signUpWithGoogle}>
              SigIn With Google
            </button>
          </div>
          <div className="btn" onClick={handleSubmit}>
            <button className="submit">submit</button>
          </div>
          <Link to="/login" state={pass}>
            Account already present?
          </Link>
        </form>
      </div>
    </>
  );
}
export default SignUp;
