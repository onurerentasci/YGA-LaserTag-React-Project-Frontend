import React from "react";
import title from "../components/images/logo1.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        <img className="title-logo" src={title} alt="title" />
      </a>
      <ul>
        <li>
          <a href="/about">Hakkımızda</a>
        </li>
        <li>
          <a href="/services">Hizmetlerimiz</a>
        </li>
        <li>
          <a className="reservation" href="/reservation">
            Online Randevu
          </a>
        </li>
      </ul>
    </nav>
  );
}
