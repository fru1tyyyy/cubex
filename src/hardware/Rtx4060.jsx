import React, { useState } from "react";
import "../assets/styles/style.css";

const product = {
  id: "1",
  name: "RTX 4060",
  price: 1500,
  image: "../img/4060.png"
};

const addToCart = (quantity) => {
  const qty = parseInt(quantity);
  if (isNaN(qty) || qty <= 0) {
    alert("Must choose 1 or more product");
    return;
  }

  const cartItem = {
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: qty,
    image: product.image
  };

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += qty;
  } else {
    cart.push(cartItem);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to cart!");
};

const Header = () => (
  <header>
    <div className="header-container">
      <div className="logo">
        <a href="/home"><i className="fa-solid fa-bag-shopping"></i> SHOPOO</a>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search...." onKeyUp={() => console.log("Search triggered")}/>
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
          <a href="/login" className="logout-link">
            <i className="fa-solid fa-right-from-bracket"></i> Logout
          </a>
        </span>
      </div>
    </div>
  </header>
);

const Footer = () => (
  <footer>
    <p>&copy; 2025 SHOPOO</p>
  </footer>
);

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <Header />
      <main>
        <div className="product-container">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-details">
            <h2>{product.name}</h2>
            <p className="price">RM {product.price}</p>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" value={quantity} min="1" onChange={(e) => setQuantity(e.target.value)}/>
            <button className="add-to-cart" onClick={() => addToCart(quantity)}>
              Add to Cart
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
