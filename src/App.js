import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Graphs from "./components/Graphs";
import Compare from "./components/Compare";


function App() {
  return (
    <Router>
      <Navbar />
     
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Graphs" element={<Graphs />} />
        <Route path="/Compare" element={<Compare />} />
      </Routes>
    </Router>
  );
}

export default App;
