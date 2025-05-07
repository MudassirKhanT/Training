import { Link } from "react-router-dom";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [signInPass, setSignInPass] = useState("");
  function handlePassword(event) {
    setSignInPass(event.target.value);
    console.log("SignIn Password:", event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
    console.log(event.target.value);
    // SignUpPassword += event.target.value;
  }

  function handleSubmit(e) {
    e.preventDefault();
    auth.onAuthStateChanged(async () => {
      await signInWithEmailAndPassword(auth, email, signInPass);
      window.location.href = "/profile";
      const user = auth.currentUser;
      if (user) {
        console.log("User Logged in Successfully");
      }
    });
  }
  //   console.log("SignUp Password:", Password);

  return (
    <>
      <div className="loginContainer">
        <h1>Login</h1>
        <form action="">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input value={email} onChange={handleEmail} type="text" name="email" id="email" placeholder="Enter Email" required />
          </div>

          <div className="Password">
            <label htmlFor="pass">Password</label>
            <input value={signInPass} onChange={handlePassword} type="password" name="password" id="pass" placeholder="Enter Password" required />
          </div>
          <div className="btn">
            <button className="submit" onClick={handleSubmit}>
              submit
            </button>
          </div>
          <Link to={"/signup"}>New user? SignUp</Link>
        </form>
      </div>
    </>
  );
}
export default Login;
