import React, { useState } from "react";
import emailjs from "@emailjs/browser";


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_292grfc", // Replace with your EmailJS Service ID
        "template_s5h9eeh", // Replace with your EmailJS Template ID
        formData,
        "lT-jQF-s6HvrxD4a5"   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setSuccessMessage("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form className="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Enter your message"
          required
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;
