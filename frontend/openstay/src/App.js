import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Páginas
import Payment from './pages/Payment.js';
import Home from './pages/Home.js';
// Componentes
import Navbar from './components/navbar.js';



export default function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};
