import React from "react";
import { Link } from "react-router-dom";

function Signup() {
return (
  <>
    <div className="Signup-heading">
      <h1>Get Started on ExpertiseLink Today</h1>
    </div>
    <div className="Signup-container">
      <form className="form-container">
        <div className="form-section">
          <label htmlFor="firstName">
            <h5>
              First Name <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            name="firstName"
            style={{ width: "25rem" }}
            required
          />
        </div>
        <div className="form-section">
          <label htmlFor="lastName">
            <h5>
              {" "}
              Last Name <span style={{ color: "red" }}>*</span>{" "}
            </h5>
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Last Name"
            id="lastName"
            name="lastName"
            style={{ width: "25rem" }}
            required
          />{" "}
        </div>
        <div className="form-section">
          {" "}
          <label htmlFor="email">
            {" "}
            <h5>
              {" "}
              Email <span style={{ color: "red" }}>*</span>
            </h5>{" "}
          </label>{" "}
          <br />{" "}
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            style={{ width: "25rem" }}
            required
          />{" "}
        </div>
        <div className="form-section">
          {" "}
          <label htmlFor="companyName">
            {" "}
            <h5>
              {" "}
              Company Name <span style={{ color: "red" }}>*</span>{" "}
            </h5>{" "}
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Company Name"
            id="companyName"
            name="companyName"
            style={{ width: "25rem" }}
            required
          />{" "}
        </div>
        <div className="form-section">
          {" "}
          <label htmlFor="role">
            {" "}
            <h5>
              {" "}
              Role <span style={{ color: "red" }}>*</span>{" "}
            </h5>{" "}
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Role"
            id="role"
            name="role"
            style={{ width: "25rem" }}
            required
          />{" "}
        </div>
        <div className="form-section">
          {" "}
          <label htmlFor="countryRegion">
            {" "}
            <h5>
              {" "}
              Country/Region <span style={{ color: "red" }}>*</span>{" "}
            </h5>{" "}
          </label>{" "}
          <br />
          <input
            type="text"
            placeholder="Country/Region"
            id="countryRegion"
            name="countryRegion"
            style={{ width: "25rem" }}
            required
          />{" "}
        </div>

        <button type="submit" className="signup-button">
          Sign Up
        </button>
        <p style={{ textAlign: "center", marginTop: "10px" }}>
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#6a3f3e", textDecoration: "underline" }}
          >
            Log In
          </Link>
        </p>

        <p
          style={{ textAlign: "center", marginTop: "5px", fontSize: "14px" }}
        >
          Signing up signifies that you have read and agree to the Terms of
          Service and our Privacy Policy. Cookie Preferences.{" "}
        </p>
      </form>
    </div>
  </>
);
}

export default Signup;
