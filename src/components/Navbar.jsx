import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeMenu}>
          <img
            src="https://res.cloudinary.com/dqhk1wg5r/image/upload/v1763050626/Logo_STARTUP_oaxa1u.png"
            alt="NFT Solutions Logo"
            className="navbar-logo"
          />
        </Link>

        {/* Burger */}
       <button
  className={`navbar-toggler ${isOpen ? 'open' : ''}`}
  type="button"
  onClick={() => setIsOpen(!isOpen)}
>
  <span className="navbar-toggler-icon"></span>
</button>


        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={closeMenu}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/portfolio" onClick={closeMenu}>Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/testimonials" onClick={closeMenu}>Témoignages</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={closeMenu}>Contact</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link highlight" to="/add-testimonials" onClick={closeMenu}>
                Laisser un témoignage
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
