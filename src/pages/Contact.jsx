import "../assets/styles/contact.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "CubeX";
    import("../assets/scripts/contact.js");
  }, []);
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <a href="/Home"><i className="fa-solid fa-bag-shopping"></i> CubeX</a>
          </div>
          <div className="header-icons">
            <span className="icon">
              <a href="/about"><i className="fa-solid fa-user"></i> About Us</a>
            </span>
            <span className="icon">
              <a href="/contact"><i className="fa-solid fa-phone"></i> Contact Us</a>
            </span>
            <span className="icon">
              <a href="/cart"><i className="fa-solid fa-cart-shopping"></i> Cart</a>
            </span>
            <span className="icon">
              <a href="/login" className="logout-link"><i className="fa-solid fa-right-from-bracket"></i> Logout</a>
            </span>
          </div>
        </div>
      </header>
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
        <p>&copy; 2025 SHOPOO</p>
      </footer>
    </div>
  );
}
