import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import Header from "./Header";
import "./LoginForm.css";
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);


  useEffect(() => {
    // Checking if user is loggedIn
    if (isLoggedIn) {
      navigate("/Budget");
    } else {
      navigate("/");
    }
  }, [navigate, isLoggedIn]);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setisLoggedIn(true);  // useState to budget page
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Header />
      <div className="app">
        <div className="login-form">
          <div className="title">Log In</div>

          <div className="form">
            <form onSubmit={signIn}>
              {/* <h1>Create Account</h1> */}
              <div className="input-container">
                <label>Username: </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                ></input>
              </div>
              <div className="input-container">
                <label>Password: </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
              </div>
              <div className="button-container">
                <button type="submit">Log In</button>
                <p>
                  Create an account <Link to={"./SignUp"}>here</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
