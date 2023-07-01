import React from "react";
import Budget from "./components/Budget";
import Login from "./components/Login"
import Insights from "./components/Insights"
import "./App.css";

// import { BudgetsProvider } from "./api/budget";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Login />} />  {/* This is the default page */}
        <Route path="/Budget" element={<Budget />} />
        <Route path="/Insights" element={<Insights />} />
      </Routes>
    </>
  );
}

export default App;
