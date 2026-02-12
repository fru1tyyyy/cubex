import "../styles/cart.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
        <div className="outer-cart">
        <div className="cart">
          <h1>Shopping Cart</h1>
            {cart.length === 0 && <li>Your cart is currently empty.</li>}

          <table>
            <tr className="table-top">
              <td className="item-image">Product</td>
              <td></td>
              <td className="item-quantity">Quantity</td>
              <td className="item-price">Price</td>
            </tr>
          {cart.map(item => (
            <tr key={item.product_id} className="cart-item">
              <td className="item-image"><img src={item.image} alt={item.name}/></td>
              <td className="item-name"><strong>{item.name}</strong></td>
              <td className="item-quantity">x{item.quantity}<br></br><button onClick={() => removeItem(item.product_id)} className="removebutton">Remove 1</button></td>
              <td className="item-price">RM {item.price}</td>
            </tr>
            ))}
            <tr className="total-row" >
              <td colSpan={4}><strong>Total: RM {calculateTotal()}</strong></td>
              </tr>
              <a href="/checkout">Checkout</a>
          </table>
        </div></div>
      </main>
      <Footer/>
    </div>
  );
}