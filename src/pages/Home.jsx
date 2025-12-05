import "../assets/styles/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import Header from "../components/Header";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    document.title = "CubeX";
    import("../assets/scripts/slides.js");
    import("../assets/scripts/searchbar.js");

    fetch("http://localhost:5000/api/product")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div>
      <Header/>
      <div className="main-banner">
        <div className="slideshow">
          <img src="/img/banner1.jpg" alt="banner" className="slide"/>
          <img src="/img/banner2.jpg" alt="banner" className="slide"/>
          <img src="/img/banner3.webp" alt="banner" className="slide"/>
          <img src="/img/banner4.jpg" alt="banner" className="slide"/>
          <img src="/img/banner5.webp" alt="banner" className="slide"/>
        </div>
      </div>
      <section className="flash-deals">
        <div className="deals-container">
          {products.map((p) => (
            <div className="deal-item" key={p.id}>
              <a href={`/product/${p.id}`}><img src={p.image} alt={p.name}/></a>
              <p><strong>{p.name}</strong></p>
              <p><small>RM {p.price}</small></p>
            </div>
          ))}
        </div>
      </section>
      <footer>
        <p>&copy; 2025 CubeX</p>
      </footer>
    </div>
  );
}
