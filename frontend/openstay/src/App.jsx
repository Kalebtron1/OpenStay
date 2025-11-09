import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Páginas
import Payment from "./pages/Payment.jsx";
import Home from "./pages/Home.jsx";

// Componentes
import Navbar from "./components/navbar.jsx";
import Checkout from "./pages/Checkout.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/Checkout" element={<Checkout />} />

      </Routes>
    </Router>
  );
}

export default App;
