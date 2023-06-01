import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Header /> \
        <Routes>
          <Route path="/" element={<Home />} /> 
          {/* Other routes and components */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
