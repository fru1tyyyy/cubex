import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/styles/header.css";
import { useNavigate } from "react-router-dom";

export default function Header(){
  const navigate = useNavigate();
  const logout = () => {
    const userId = localStorage.getItem("userId");

    if(userId){
      localStorage.removeItem("userId");
      localStorage.removeItem(`cart_${userId}`);
    }

    navigate("/login", {replace: true});
  };
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <a href="/home"><i className="fa-solid fa-bag-shopping"></i> CubeX</a>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            id="searchInput" 
            placeholder="Search..." 
            onKeyUp={() => {
              if (window.searchGames) window.searchGames();
              if (window.updateLastSearch) window.updateLastSearch();
            }}/>
        </div>
        <div className="header-icons">
          <span className="icon">
            <a href="/admin">I</a>
          </span>
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
            <a href="/profile"><i className="fa-solid fa-circle-user"></i> Profile</a>
          </span>
          <span className="icon">
            <button onClick={logout} className="logout-link"
              style={{
                background: "none",
                border: "none",
                color: "inherit",
                fontSize: "inherit"
              }}>
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </button>
          </span>
        </div>
      </div>
    </header>
  );
}
