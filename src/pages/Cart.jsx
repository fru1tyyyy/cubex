import "../assets/styles/cart.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";

export default function Cart() {
  const [cart, setCart] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId || isNaN(Number(userId))) {
      setCart([]);
      return;
    }
    fetchCart();
  }, [userId]);

  const fetchCart = () => {
    fetch(`http://localhost:5000/api/cart/${Number(userId)}`)
      .then(res => res.json())
      .then(data => setCart(Array.isArray(data) ? data : []))
      .catch(err => console.error("Cart load error:", err));
  };

  const removeItem = async (productId) => {
    if (!userId) return;

    const res = await fetch("http://localhost:5000/api/cart/remove", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: Number(userId), productId: Number(productId) }),
    });

    const data = await res.json();
    alert(data.message || "Item removed");
    fetchCart();
  };

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <Header />
      <main>
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.length === 0 && <li>Your cart is empty.</li>}
            {cart.map(item => (
              <li key={item.product_id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong> - RM {item.price} x {item.quantity}
                  <button onClick={() => removeItem(item.product_id)}>Remove 1</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: RM {calculateTotal()}</p>
        </div>
      </main>
      <footer>
        <p>&copy; 2025 CubeX</p>
      </footer>
    </div>
  );
}
