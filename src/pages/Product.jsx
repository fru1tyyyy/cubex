import "../assets/styles/product.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(() => console.log("Failed to load product"));
  }, [id]);

  const addToCart = () => {
    const qty = parseInt(quantity);
    if (isNaN(qty) || qty <= 0) {
      alert("Quantity must be 1 or more");
      return;
    }

    const userId = localStorage.getItem("userId");
    if (!userId || isNaN(Number(userId))) {
      alert("You must login first");
      return;
    }

    fetch("http://localhost:5000/api/cart/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId: Number(userId),
        productId: Number(product.id),
        quantity: qty,
      }),
    })
      .then(res => res.json())
      .then(data => alert(data.message || "Item added to cart"))
      .catch(err => {
        console.error("Add to cart error:", err);
        alert("Failed to add to cart");
      });
  };

  if (!product) return <p style={{ textAlign: "center" }}>Loading...</p>;

  return (
    <div>
      <Header/>
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-details">
          <h2>{product.name}</h2>
          <p className="price">RM {product.price}</p>
          <p className="description">{product.description}</p>
          <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
      <footer>
        <p>&copy; 2025 CubeX</p>
      </footer>
    </div>
  );
}
