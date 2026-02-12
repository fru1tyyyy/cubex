import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Headeradmin from "../components/Headeradmin";
import Footer from "../components/Footer";
import "../styles/productadmin.css";

export default function Productadmin() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
    category: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => {
        console.error("Failed to load product:", err);
        alert("Failed to load product");
      });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const updateProduct = () => {
    fetch(`http://localhost:5000/api/product/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...product,
        price: Number(product.price),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          alert("Update failed: " + data.error);
          return;
        }
        alert("Product updated successfully");
        navigate("/Homeadmin");
      })
      .catch((err) => {
        console.error("Update fetch error:", err);
        alert("Failed to update product");
      });
  };

  return (
    <div>
      <Headeradmin/>
      <div className="productadmin-container">
        <div className="productadmin-image">
          {product.image ? (
            <img src={product.image} alt={product.name} />
          ) : (
            <div style={{ width: "100%", height: "300px", backgroundColor: "#eee", borderRadius: "8px" }} />
          )}
        </div>
        <div className="productadmin-details">
          <h2>Edit Product</h2>
          <label>Name:</label>
          <input name="name" value={product.name} onChange={handleChange} />
          <label>Price:</label>
          <input name="price" type="number" value={product.price} onChange={handleChange} />
          <label>Image URL:</label>
          <input name="image" value={product.image} onChange={handleChange} />
          <label>Description:</label>
          <textarea name="description" value={product.description} onChange={handleChange} />
          <label>Category:</label>
          <select name="category" value={product.category} onChange={handleChange}>
            <option value="speed">Speed</option>
            <option value="size">Size</option>
            <option value="weird">Weird</option>
            <option value="picture">Picture</option>
            <option value="lube">Lube</option>
          </select>
          <button onClick={updateProduct}>Save Changes</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
