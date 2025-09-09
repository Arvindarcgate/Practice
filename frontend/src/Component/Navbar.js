
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-white text-xl font-bold">MyApp</h1>

        {/* Links */}
        <div className="space-x-6">
          <Link
            to="/form"
            className="text-white hover:text-yellow-300 transition"
          >
            Form
          </Link>
          <Link
            to="/products"
            className="text-white hover:text-yellow-300 transition"
          >
            Product
          </Link>

          <Link
            to="/login"
            className="text-white hover:text-yellow-300 transition"
          >
            Login
          </Link>
          <Link
            to="/singnup"
            className="text-white hover:text-yellow-300 transition"
          >
            Singnup
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
