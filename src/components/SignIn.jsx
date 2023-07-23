import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import SigninHeader from "./SignInHeader";
import "./LoginForm.css";
import { useNavigate, Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Layout from "@mui/material/Stack";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

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
        setErrorMessages({
          name: "unsuccessful",
          message: "Unable to log in, please verify your email and password",
        });
      });
  };

  // Generate error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error, bg-error , bg-opacity-10">
        <Layout sx={{ width: "100%" }} spacing={2} marginTop={2}>
          <Alert severity="error">{errorMessages.message}</Alert>
        </Layout>
      </div>
    );

  return (
    <div>
      <SigninHeader />
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
              {renderErrorMessage("unsuccessful")}
              <div className="button-container">
                <button type="submit">Log In</button>
                <p>
                 Don't have an account? Click <Link to={"./SignUp"}>here</Link>
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
