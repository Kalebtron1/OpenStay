import React from "react";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}