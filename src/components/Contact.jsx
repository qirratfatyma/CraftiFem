import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/sameersaleem/google_sheets/ZMXLAjHJGsxIXBfO",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", email: "", message: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="contact-section">
        <Form onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <label>Your Name</label>
          <input type="text" onChange={handleChange} name="name"></input>

          <label>Email</label>
          <input type="email" onChange={handleChange} name="email"></input>

          <label>Message</label>
          <textarea
            name="message"
            onChange={handleChange}
            rows={6}
            placeholder="Type your message"
          />
          <button type="submit" className="contact-button">
            Submit
          </button>
        </Form>
      </div>
    </div>
  );
}
