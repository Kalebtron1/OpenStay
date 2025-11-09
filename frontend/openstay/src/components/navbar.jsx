import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 text-white px-6 py-4 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="OpenStay Logo" className="h-12 w-auto" />
          <span className="ml-2 font-bold text-xl">OpenStay</span>
        </Link>

        {/* Menú */}
        <ul className="flex items-center gap-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-300 transition font-medium"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/checkout" 
              className="hover:text-gray-300 transition font-medium"
            >
              Publish Property
            </Link>
          </li>
          <li>
            <Link 
              to="/login" 
              className="hover:text-gray-300 transition font-medium"
            >
              Login
            </Link>
          </li>
          <li>
            <Link 
              to="/register" 
              className="hover:text-gray-300 transition font-medium"
            >
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
