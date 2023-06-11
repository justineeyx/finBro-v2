import React from 'react';
import Header from "./components/Header"
import Login from "./components/Login"
import './App.css';

// const express = require('express');
// const mysql = require("mysql")
// const dotenv = require('dotenv')

// const app = express();
// dotenv.config({ path: './src/.env'})

function App() {
  return (
    <div>
      <Header />
      <Login />
    </div>
  );
}

export default App;
