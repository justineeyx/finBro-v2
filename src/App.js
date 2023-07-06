import React from "react";
import Budget from "./components/Budget";
// import Login from "./components/Login"
import Insights from "./components/Insights";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AuthDetails from "./components/AuthDetails";

// import { BudgetsProvider } from "./api/budget";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      {/* <div className="App"> 
        <SignUp />
        <AuthDetails />
      </div> */}

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Budget" element={<Budget />} />
        <Route path="/Insights" element={<Insights />} />
      </Routes>
    </>
  );
}

export default App;
