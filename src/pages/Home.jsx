import "../styles/home.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(""); 

  useEffect(() => {
    document.title = "CubeX";
    import("../scripts/slides.js");
    import("../scripts/searchbar.js");

    fetchProducts(filter); 
  }, [filter]);

  const fetchProducts = (category) => {
    let url = "http://localhost:5000/api/product";
    if (category) url += `?category=${category}`; 

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setProducts(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  };

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
      <div className="filter-container">
        <label>Filter by category:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="speed">Speed</option>
          <option value="size">Size</option>
          <option value="weird">Weird</option>
          <option value="picture">Picture</option>
          <option value="lube">Lube</option>
        </select>
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
      <Footer/>
    </div>
  );
}
