import "../assets/styles/contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Header from "../components/Header";

export default function Contact() {
  useEffect(() => {
    document.title = "CubeX";
    import("../assets/scripts/contact.js");
  }, []);
  return (
    <div>
      <Header/>
      <main className="contact-wrapper">
        <div className="brand-box">
          <img src="/img/contact.png" alt="loading" />
          <p>We are here to help</p>
        </div>
        <div className="contact-box">
          <h2>Contact Us</h2>
          <form
            id="contact"
            onSubmit={(e) => {
              e.preventDefault();
              if (window.handleContactSubmit) window.handleContactSubmit();
            }}>
            <input type="text" id="username" placeholder="Enter your username..." required/>
            <input type="email" id="email" placeholder="Enter your email..." required/>
            <textarea id="complains" placeholder="Enter your complains here..." required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 CubeX</p>
      </footer>
    </div>
  );
}
