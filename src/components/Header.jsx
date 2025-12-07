import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/styles/header.css";
const defaultAvatar = "/img/default.jpg";

export default function Header() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) setUser(JSON.parse(stored));
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <a href="/home"><i className="fa-solid fa-bag-shopping"></i> CubeX</a>
      </div>
      <div className="search-container">
        <input type="text" id="searchInput" placeholder="Search..." 
          onKeyUp={() => {
            if (window.searchGames) window.searchGames();
            if (window.updateLastSearch) window.updateLastSearch();
          }}/>
      </div>
      <div className="nav-right">
        <div className="profile-wrapper" onClick={toggleMenu}>
          <img src={user?.picture ? `http://localhost:5000/upload/${user.picture}` : defaultAvatar} alt="profile" className="profile-icon"/>
        </div>
        {menuOpen && (
          <div className="dropdown-menu">
            <Link to="/profile" className="dropdown-item">Edit Profile</Link>
            <Link to="/cart" className="dropdown-item">Your Cart</Link>
            <Link to="/about" className="dropdown-item">About Us</Link>
            <Link to="/contact" className="dropdown-item">Contact Us</Link>
            <Link to="/login" className="dropdown-item">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
}
