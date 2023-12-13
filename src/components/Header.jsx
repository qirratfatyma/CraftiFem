import { logDOM } from "@testing-library/react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Logo from "../Logo.svg";

function Header() {
  return (
    <Navbar expand="lg" className="navbar-color ">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="navbar-title">
            <img src={Logo} alt="Logo" />{" "}
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-section">
            <Link to="/HeroSection" className="navbar-elements">
              <h3>Home</h3>
            </Link>
            <Link to="/Collection" className="navbar-elements">
              <h3>Collection</h3>
            </Link>
            <Link to="/Contact" className="navbar-elements">
              <h3>Contact Us</h3>
            </Link>
            <Link to="/NewArrival" className="navbar-elements">
              <h3>New Arrivals</h3>

            </Link>
          </Nav>
          <Link to="/Login">
            <button className="btn navbar-btn">Login</button>
          </Link>
          <Link to="/Signup">
            <button className="btn navbar-btn">Signup</button>
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
