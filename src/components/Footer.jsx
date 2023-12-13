import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/Logo.jpeg";
import facebookIcon from "../assets/img/facebook-logo.png";
import twitterIcon from "../assets/img/Twitter-logo.png";
import instagramIcon from "../assets/img/Instagram-logo.png";
import linkedinIcon from "../assets/img/linkedin-logo.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 col-md-3 footer-logo">
            <img src={logo} alt="logo" />
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <p>Follow Us on Social Media</p>
            <div className="social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitterIcon} alt="Twitter" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramIcon} alt="Instagram" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-md-3">
            <p>Community</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/community">Blog</Link>
              </li>
              <li>
                <Link to="/community">Community</Link>
              </li>
              <li>
                <Link to="/community">Ideas</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-sm-6 col-md-3">
            <p>Useful Links</p>
            <ul className="list-unstyled">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/team">Team</Link>
              </li>
              <li>
                <Link to="/media">Media</Link>
              </li>
              <li>
                <Link to="/terms-of-use">Terms of Use</Link>
              </li>
              <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/cookie-policy">Cookie Policy</Link>
              </li>
              <li>
                <Link to="/Contacts-ands-imprints">Contacts and imprints</Link>
              </li>
              <li>
                <Link to="/cookie-setting">Cookie Setting</Link>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <p>
            &copy; {new Date().getFullYear()} CraftiFem All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
