import React from "react";
import { Link } from "react-router-dom";
import "../Style/component/Navbar.css"; // Import external CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <h1 className="logo">MyApp</h1>

        {/* Links */}
        <div className="nav-links">
          <Link to="/form" className="nav-link">Form</Link>
          <Link to="/products" className="nav-link">Product</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/singnup" className="nav-link">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
