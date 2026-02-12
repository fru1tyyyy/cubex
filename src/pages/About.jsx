import "../styles/about.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  useEffect(() => {
    document.title = "CubeX";
  }, []);
  return (
    <div>
      <Header/>
      <main className="container">
        <h1>Our Team</h1>
        <div className="members">
          <a href="/been" className="member-card">
            <img src="/img/been2.jpg" alt="Yu Been" className="member-pfp" />
            <h3>Yu Been</h3>
            <p>Software Engineer</p>
          </a>
          <a href="/thiamjun" className="member-card">
            <img src="/img/thiamjun.png" alt="Wong Thiam Jun" className="member-pfp" />
            <h3>Wong Thiam Jun</h3>
            <p>Software Engineer</p>
          </a>
          <a href="/darren" className="member-card">
            <img src="/img/darren1.jpg" alt="Darren Low Jia Hern" className="member-pfp" />
            <h3>Darren Low Jia Hern</h3>
            <p>Software Engineer</p>
          </a>
          <a href="/zane" className="member-card">
            <img src="/img/zane1.jpg" alt="Zane Ford" className="member-pfp" />
            <h3>Zane Ford</h3>
            <p>Software Engineer</p>
          </a>
        </div>
        <div className="infobox">
          <div className="info">
            <h2>About CubeX</h2>
            <p>CubeX is a dynamic e-commerce platform dedicated to offering a wide range of puzzle cubes, catering to both beginners and speedcubing enthusiasts. From classic 3x3 cubes to advanced magnetic speedcubes, accessories, and collectible puzzles, CubeX provides a one-stop shopping experience with competitive prices, expert selections, and reliable service.</p>
          </div>
          <div className="info">
            <h2>What CubeX Sells?</h2>
            <p>CubeX is an online marketplace specializing in a wide variety of puzzle cubes, ranging from beginner-friendly 2x2 and 3x3 cubes to advanced magnetic speedcubes, shape mods, and collector's editions. In addition, it offers essential cubing accessories such as lubricants, timers, and mats, providing everything cubers need, whether they're casual solvers, speedcubing competitors, or puzzle enthusiasts.</p>
          </div>
        </div>
        <div className="info">
          <h2>Contact Us</h2>
          <p>Have questions or need assistance? We're here to help!</p>
          <p>Feel free to reach out to us at{" "}<a href="mailto:cubex984@gmail.com">cubex984@gmail.com</a> or call us at{" "}<a href="tel:+60123456789">+60 12-345 6789</a>.</p>
        </div>
      </main>
      <Footer/>
    </div>
  );
}
