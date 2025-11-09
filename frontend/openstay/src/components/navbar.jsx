import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Navbar(){

        return (
    <nav style={{ padding: "0.5rem 1rem", background: "#609120ff" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="OpenStay Logo" style={{ height: "70px", width: "auto", display: "block" }} />
    </Link>

        {/* Menú */}
        <ul style={{ display: "flex", listStyle: "none", gap: "1rem", margin: 0 , padding:0}}>
          <li>
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          </li>
          <li>
            <Link to="/Checkout" style={{ color: "white", textDecoration: "none" }}>Publish Property</Link>
          </li>
          <li>
            <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
          </li>
          <li>
            <Link to="/register" style={{ color: "white", textDecoration: "none" }}>Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );

    }
