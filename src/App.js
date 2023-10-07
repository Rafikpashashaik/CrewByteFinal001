import React from "react";
import Crewbyte from "../src/Components/Crewbyte";
import Crewabout from "../src/Components/Crewabout";
import { Route, Routes } from "react-router-dom";
import ContactSection from '../src/Components/ContactSection'

function App() {
  return (
    <div className="www" style={{ backgroundColor: "#302C42" }}>
      
      <Routes>
        <Route path="/" element={<Crewbyte />} />
        <Route path="/aboutus" element={<Crewabout />} />
        <Route path="/contactus" element={<ContactSection/>} />
      </Routes>
    </div>
  );
}

export default App;
