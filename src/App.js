import React from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Reservation from "./pages/Reservation";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./pages/SignUp";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
