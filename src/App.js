import { useState } from "react";
import Budget from "./components/Budget";
// import Login from "./components/Login"
import Insights from "./components/Insights";
import "./App.css";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Protected from "./components/Protected";
// import AuthDetails from "./components/AuthDetails";

// import { BudgetsProvider } from "./api/budget";
import { Route, Routes } from "react-router-dom";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(null);
  const logIn = () => {
    setisLoggedIn(true);
  };
  const logOut = () => {
    setisLoggedIn(false);
  };

  return (
    <>
      {/* <div className="App"> 
        <SignUp />
        <AuthDetails />
      </div> */}
      {isLoggedIn ? (
        <button onClick={logOut}>Logout</button>
      ) : (
        <button onClick={logIn}>Login</button>
      )}

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="/Budget"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <Budget />
            </Protected>
          }
        />
        {/* <Route path="/Budget" element={<Budget />} /> */}
        <Route path="/Insights" element={<Insights />} />
      </Routes>
    </>
  );
}

export default App;
