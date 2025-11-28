import "@fortawesome/fontawesome-free/css/all.min.css";
import "../assets/styles/header.css";

export default function Header() {
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
            <a href="/login" className="logout-link">
              <i className="fa-solid fa-right-from-bracket"></i> Logout
            </a>
          </span>
        </div>
      </div>
    </header>
  );
}
