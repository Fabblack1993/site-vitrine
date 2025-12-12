import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services'; 
import Testimonials from './pages/Testimonials';
import AddTestimonials from './pages/AddTestimonials';
import AdminDashboard from './pages/AdminDashboard';
import Portfolio from './pages/Portfolio';
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/add-testimonials" element={<AddTestimonials />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
      

     < Footer/>
    </Router>
  );
}

export default App;