import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa"; // íconos de react-icons
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">

          {/* Logo / Nombre */}
          <div className="flex flex-col items-center md:items-start">
            <img src={logo} alt="OpenStay Logo" className="h-12 w-auto mb-2" />
            <p className="text-gray-300 text-sm">
              Tu plataforma de alojamiento confiable
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-3">Enlaces</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/register" className="hover:text-white transition">Registrarse</a></li>
              <li><a href="/login" className="hover:text-white transition">Login</a></li>
              <li><a href="/checkout" className="hover:text-white transition">Publicar Propiedad</a></li>
            </ul>
          </div>

          {/* Contacto / Redes Sociales */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-3">Contacto</h3>
            <p className="text-gray-300 text-sm">contacto@openstay.com</p>
            <p className="text-gray-300 text-sm">+52 55 1234 5678</p>
            <div className="flex mt-3 gap-4">
              <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
              <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
              <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            </div>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} OpenStay. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
