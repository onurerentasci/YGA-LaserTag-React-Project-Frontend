import React from "react";
import { Link } from "react-router-dom";
import title from "../components/images/logo1.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Footer.css";
import { CustomLink } from "./Navbar";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram, Twitter, YouTube } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <footer className="text-white py-4 bg-dark">
      <div className="footer-container">
        <div className="row d-flex justify-content-around">
          <div className="col-md-3 col-sm-6 col-12 me-3">
            <Link
              to="/"
              className="col-12 col-md3 d-flex align-items-center justify-content-center"
            >
              <img src={title} className="mx-2" width={150} />
            </Link>
            <div className="mt-20 d-flex justify-content-between">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                orci libero, auctor nec mauris id, porttitor rhoncus elit.
                Maecenas facilisis semper ligula, nec gravida velit interdum
                efficitur... <br></br>
                <Link
                  className="text-light text-decoration-none d-flex justify-content-start"
                  to="/about"
                >
                  Devamını Oku...
                </Link>
              </p>
            </div>
            <ul className="d-flex justify-content-evenly mt-3 mb-3">
              <li className="nav-item">
                <Link>
                  <FacebookIcon className="text-light text-decoration-none" />
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <Instagram className="text-light text-decoration-none" />
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <Twitter className="text-light text-decoration-none" />
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <YouTube className="text-light text-decoration-none" />
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-12 me-4">
            <h3 className="d-flex justify-content-start">Hızlı Erisim</h3>
            <ul className="border-top border-end border-3">
              <li className="mt-3 mb-3 ms-4">
                <CustomLink
                  className="text-decoration-none text-white"
                  to="/about"
                >
                  Hakkımızda
                </CustomLink>
              </li>
              <li className="mb-3 ms-4">
                <CustomLink
                  className="text-decoration-none text-white"
                  to="/services"
                >
                  Hizmetlerimiz
                </CustomLink>
              </li>
              <li className="mb-3 ms-4">
                <CustomLink
                  className="text-decoration-none text-white"
                  to="/reservation"
                >
                  Online Randevu
                </CustomLink>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6 col-12 me-4">
            <h3 className="d-flex justify-content-start">Iletisim Bilgileri</h3>
            <ul className="border-top border-end border-3 d-flex align-items-start flex-column mb-3">
              <li className="mt-3 mb-3 list-unstyled text-start p-2">
                <LocationOnIcon />
                Atatürk Caddesi, Beypazarı Sokak, No:2, Atakum/Samsun
              </li>
              <li className="mb-3 list-unstyled p-2">
                <PhoneIcon />
                0530 999 33 99
              </li>
              <li className="mb-3 list-unstyled p-2">
                <EmailIcon />
                info@lasertag.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
