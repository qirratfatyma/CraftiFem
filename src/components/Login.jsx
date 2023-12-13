import React from "react";

function Login() {
  return (
    <div className="login-container">
      <form className="form-container">
        <h2>Log in to your account</h2>
        <br></br>
        <div className="form-section">
          <label htmlFor="email">
            <h5>
              Email <span style={{ color: "red" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            style={{ width: "25rem" }}
            required
          />
        </div>

        <div className="form-section">
          <label htmlFor="password">
            <h5>
              Password <span style={{ color: "#EDCEAB" }}>*</span>
            </h5>
          </label>
          <br />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            style={{ width: "25rem" }}
            required
          />
        </div>
        <br></br>
        <button type="submit" className="login-btn">
          Log In
        </button>

        <p style={{ textAlign: "center", marginTop: "10px" }}>
          New to ExpertiseLink?{" "}
          <a
            href="/signup"
            style={{ color: "#6a3f3e", textDecoration: "underline" }}
          >
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
