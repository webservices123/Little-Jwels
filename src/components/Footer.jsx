import React from "react";
import "./Footer.css"; // Create a CSS file for styling
import { Link } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-left">
          <img
            className="footer-img"
            src="/Home_Images/lj-logo-new.png"
            alt="Logo"
          />
        </div>
        <div className="footer-center">
          <ul>
            <li>
              <i className="fa-solid fa-map-location-dot" />
              <a
                href="https://maps.app.goo.gl/7XkJFboRLnFHEKcj9"
                target="_blank"
              >
                Plot No. 390, Traffic Park Main Road, Near Taori Marketing,
                Khare Town, Nagpur - 440010.
              </a>
            </li>
            <li>
              <i className="fa-solid fa-mobile-screen" />
              <a href="tel:9767744782" target="_blank">
                +91-9767744782
              </a>
            </li>
            <li>
              <i className="fa-solid fa-phone" />
              <a href="tel:9607186971" target="_blank">
                +91-9607186971
              </a>
            </li>
            <li>
              <i className="fa-solid fa-envelope" />
              <a
                href="mailto:littlejewels2010@gmail.com"
                target="_blank"
              >
                littlejewels2010@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3538495788366!2d79.0654915!3d21.138311899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c063d0ca7311%3A0x6dc46fcfc93b039f!2sLittle%20Jewels%20Kindergarten!5e0!3m2!1sen!2sin!4v1695137473426!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="badjate-grp">
        <div>T h e &nbsp; b a d j a t e &nbsp; g r o u p</div>
        <div className="badjate-links">
          <a href="https://www.badjategroup.com/" target="_blank">
            <img
              src="/Home_Images/badjate-new.jpg"
              width="300px"
              className="img-fluid"
            />
          </a>
          <a href="https://www.jaininternationalnagpur.edu.in/" target="_blank">
            <img src="/Home_Images/jis-new-logo.png" className="img-fluid" />
          </a>
          <a href="https://www.sbjit.edu.in/" target="_blank">
            <img src="/Home_Images/sbjain-new-logo.png" className="img-fluid" />
          </a>
        </div>
      </div>
      <div className="footer-end">
        Copyright © {new Date().getFullYear()} Little Jewels Kindergarten,Nagpur | All Rights Reserved | A Unit of GEMINI EDUCATION SERVICES PVT LTD.
      </div>
    </footer>
  );
  
}

export default Footer;
