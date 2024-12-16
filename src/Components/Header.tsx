import "../Style/Header.css";
import Link from "next/link";

function Header () {
    return(
        <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-links">
          <a href={"/"}>Home</a>
          <a href="/about">Shop</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="navbar-icons">
          <button aria-label="Create Profile">👤</button>
          <button aria-label="Favorites">❤️</button>
          <button aria-label="Search">🔍</button>
          <button aria-label="Cart">🛒</button>
        </div>
      </nav>
      </div>
    )
}
export default Header