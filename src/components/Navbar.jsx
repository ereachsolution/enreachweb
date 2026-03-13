import { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  useEffect(() => {
    const btn = document.getElementById("hamburger");
    const nav = document.getElementById("nav-menu");
    const toggle = () => nav.classList.toggle("open");
    if (btn && nav) {
      btn.addEventListener("click", toggle);
      return () => btn.removeEventListener("click", toggle);
    }
  }, []);

  return (
    <header>
      <div className="container header-flex">
        <div className="logo-area">
          <div className="logo-area-row">
            <Link to="/">
              <img src={logo} alt="Enreach Solution Logo" className="logo" />
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span className="brand-title">ENREACH SOLUTION</span>
            </Link>
          </div>
        </div>
        <nav>
          <button id="hamburger" className="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className="nav-links" id="nav-menu">
            <li><a href="/#about">About Us</a></li>
            <li><a href="/#services">Services</a></li>
            <li><a href="/#why-choose-us">Why Choose Us</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><Link to="/articles">Articles</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
