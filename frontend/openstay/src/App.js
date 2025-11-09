import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Páginas
import Payment from './pages/Payment.js';
import Home from './pages/Home.jsx';
import Checkout from './pages/Checkout.jsx'

// Componentes
import Navbar from './components/navbar.js';
import Footer from './components/footer.jsx';
import Layout from './components/Layout.jsx';



export default function App() {
  return (
    <Router>
      <Layout>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Payment" element={<Payment />} />
        <Route path="/Checkout" element={<Checkout/>}/>
      </Routes>
    </Layout>
    </Router>
    
  );
};
