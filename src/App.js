import React from "react";
import Budget from "./components/Budget";
import Login from "./components/Login"
import Expense from "./components/Expense"
import "./App.css";
// import { BudgetsProvider } from "./api/budget";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />  {/* This is the default page */}
        <Route path="/Budget" element={<Budget />} />
        <Route path="/Expense" element={<Expense />} />
      </Routes>
    </>
  );
}

export default App;
