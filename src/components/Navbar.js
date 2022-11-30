import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import title from "D:/MyCode/proje/src/components/images/title.png";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img className="title-logo" src={title} alt="title" />
      </Link>
      <ul>
        <CustomLink to="/about">Hakkımızda</CustomLink>
        <CustomLink to="/pricing">Fiyatlandırma</CustomLink>
        <CustomLink className="reservation" to="/reservation">
          Online Randevu
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
