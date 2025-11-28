import React, { useState, useEffect } from "react";
import "../assets/styles/style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.title = "CubeX";
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const calculateTotal = () =>
    cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  const reduceQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity -= 1;
    if (updatedCart[index].quantity === 0) {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div>
      <header>
        <div className="header-container">
          <div className="logo">
            <a href="/Home">
              <i className="fa-solid fa-bag-shopping"></i> CubeX
            </a>
          </div>
          <div className="header-icons">
            <span className="icon">
              <a href="/about">
                <i className="fa-solid fa-user"></i> About Us
              </a>
            </span>
            <span className="icon">
              <a href="/contact">
                <i className="fa-solid fa-phone"></i> Contact Us
              </a>
            </span>
            <span className="icon">
              <a href="/cart">
                <i className="fa-solid fa-cart-shopping"></i> Cart
              </a>
            </span>
            <span className="icon">
              <a href="/login" className="logout-link">
                <i className="fa-solid fa-right-from-bracket"></i> Logout
              </a>
            </span>
          </div>
        </div>
      </header>
      <main>
        <div className="cart">
          <h2>Cart</h2>
          <ul>
            {cart.length === 0 && <li>Your cart is empty.</li>}
            {cart.map((item, index) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-details">
                  <strong>{item.name}</strong> - RM {item.price} x {item.quantity}
                  <button onClick={() => reduceQuantity(index)}>Remove 1</button>
                </div>
              </li>
            ))}
          </ul>
          <p>Total: RM {calculateTotal()}</p>
        </div>
      </main>

      <footer>
        <p>&copy; 2025 SHOPOO</p>
      </footer>
    </div>
  );
}
