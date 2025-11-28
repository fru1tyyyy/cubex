import "../assets/styles/about.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title = "CubeX";
  }, []);
  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <a href="/Home"><i className="fa-solid fa-bag-shopping"></i> SHOPOO</a>
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
      <main className="container">
        <h1>Group Member:</h1>
        <div className="members">
          <a href="/been" className="member-card">
            <img src="/img/been.jpg" alt="been" className="member-pfp"/>
            <h3>Yu Been</h3>
            <p>Full Stack Developer</p>
          </a>
          <a href="/thiamjun" className="member-card">
            <img src="/img/thiamjun.png" alt="thiamjun" className="member-pfp"/>
            <h3>Wong Thiam Jun</h3>
            <p>Web Developer</p>
          </a>
          <a href="/darren" className="member-card">
            <img src="/img/darren.jpg" alt="darren" className="member-pfp"/>
            <h3>Darren Low</h3>
            <p>Software Engineer</p>
          </a>
        </div>
        <h2>About CubeX</h2>
        <p>
          Shopoo is a dynamic E-Commerce platform dedicated to offering a wide
          range of gaming products and computer hardware, catering to both
          casual gamers and tech enthusiasts. From the latest video game titles
          to essential PC components and accessories, Shopoo provides a
          one-stop shopping experience with competitive prices and reliable
          service.
        </p>
        <h2>What Shopoo Selling?</h2>
        <p>
          Shopoo is an online marketplace specializing in a wide range of
          computer components, including graphic cards, CPUs, and other
          essential hardware for building or upgrading PCs. In addition, it
          offers a diverse selection of video games across genres like
          story-driven adventures, action-packed titles, and more, catering to
          both gamers and tech enthusiasts.
        </p>
        <h2>Contact Us</h2>
        <p>Have questions or need assistance? We're here to help!</p>
        <p>
          Feel free to reach out to us at{" "}
          <a href="mailto:shopoo@gmail.com">shopoo@gmail.com</a> or call us at{" "}
          <a href="tel:+60123456789">+60 12-345 6789</a>.
        </p>
      </main>
      <footer>
        <p>&copy; 2025 SHOPOO</p>
      </footer>
    </div>
  );
}
