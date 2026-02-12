import "../styles/homeadmin.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Headeradmin from "../components/Headeradmin";
import Footer from "../components/Footer";

export default function HomeAdmin() {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "CubeX Admin";
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
      .catch((err) => console.error(err));
  };

  const deleteProduct = (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    fetch(`http://localhost:5000/api/product/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
      })
      .catch((err) => console.error("Delete error:", err));
  };

  return (
    <div>
      <Headeradmin/>
      <div className="main-banner">
        <div className="slideshow">
          <img src="/img/banner1.jpg" alt="banner" className="slide" />
          <img src="/img/banner2.jpg" alt="banner" className="slide" />
          <img src="/img/banner3.webp" alt="banner" className="slide" />
          <img src="/img/banner4.jpg" alt="banner" className="slide" />
          <img src="/img/banner5.webp" alt="banner" className="slide" />
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
            <div className="deal-item admin-item" key={p.id} onClick={() => navigate(`/Productadmin/${p.id}`)} >
              <div className="admin-actions"><i className="fas fa-trash delete-icon" onClick={(e) => {e.stopPropagation(); deleteProduct(p.id);}}></i>
              </div>
              <img src={p.image} alt={p.name} />
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
