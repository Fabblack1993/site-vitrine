import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
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
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
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
