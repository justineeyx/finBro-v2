import React from "react";
// import Header from "./components/Header"
import Budget from "./components/Budget";
// import Login from "./components/Login"
import "./App.css";
import { BudgetsProvider } from "./api/budget";

function App() {
  return (
    <div>
      {/* <Header />
      <Login /> */}
      <BudgetsProvider>
        <Budget />
      </BudgetsProvider>
    </div>
  );
}

export default App;
