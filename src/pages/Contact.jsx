import "../styles/contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  useEffect(() => {
    document.title = "CubeX";

    window.handleContactSubmit = async () => {
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const complains = document.getElementById("complains").value;

      const res = await fetch("http://localhost:5000/api/contact/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, complains }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    };
  }, []);

  return (
    <div>
      <Header />
      <main className="contact-wrapper">
        <div className="brand-box">
          <img src="/img/contact.png" alt="loading" />
          <p>We are here to help</p>
        </div>
        <div className="contact-box">
          <h2>Contact Us</h2>
          <form id="contact" onSubmit={(e) => {
              e.preventDefault();
              if (window.handleContactSubmit) {
                window.handleContactSubmit();
              }
            }}>
            <input type="text" id="username" placeholder="Enter your username..."required/>
            <input type="email" id="email" placeholder="Enter your email..." required/>
            <textarea id="complains" placeholder="Enter your complains here..." required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
