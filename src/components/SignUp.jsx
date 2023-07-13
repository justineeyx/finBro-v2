import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import SignUpHeader from "./SignUpHeader";
import Alert from "@mui/material/Alert";
import Layout from "@mui/material/Stack";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [isSignedUp, setisSignedUp] = useState(false);
  const [errorMessages, setErrorMessages] = useState({});

  useEffect(() => {
    // Checking if user has signup
    if (isSignedUp) {
      navigate("/");
    } else {
      navigate("/SignUp");
    }
  }, [navigate, isSignedUp]);

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setisSignedUp(true);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessages({
          name: "unsuccessful",
          message: "Unable to sign up, please verify your email and password",
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
      <SignUpHeader />
      <div className="app">
        <div className="login-form">
          <div className="title">Create Account</div>

          <div className="form">
            <form onSubmit={signUp}>
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
                  placeholder="Password of min 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                ></input>
              </div>
              {renderErrorMessage("unsuccessful")}
              <div className="button-container">
                <button type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
