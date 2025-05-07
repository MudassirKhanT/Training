import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useState } from "react";
function Login() {
  const location = useLocation();
  const state = location.state || {};
  console.log("State:", state);

  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  //   const Password = location.state?.SignUpPassword;
  //   const { state } = props.state;
  //   const { pass } = state;
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

  function handleSubmit() {
    navigate("/");
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
