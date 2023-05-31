import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
function App() {
return (
  <div className="app">
    <Router>
      <Routes>
      <Route path="/" element={<Header/>}/>
      <Route exact path="/" element={<Home/>} />
      
      
      </Routes>
    </Router>
  </div>
);
}
export default App;