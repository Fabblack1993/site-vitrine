import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="https://res.cloudinary.com/dqhk1wg5r/image/upload/v1763050626/Logo_STARTUP_oaxa1u.png"
            alt="NFT Solutions Logo"
            className="navbar-logo me-2"
          />
        </Link>

        {/* Burger button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/portfolio">Portfolio</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/testimonials">Témoignages</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/add-testimonials">Laisser un témoignage</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;