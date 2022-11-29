import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Reservation from "./pages/Reservation";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element= {<Home />}/>
          <Route path="/pricing" element= {<Pricing />}/>
          <Route path="/about" element= {<About />}/>
          <Route path="/reservation" element= {<Reservation />}/>
        </Routes>
      </div>
    </>
  );
}
