import { useState } from "react";
// libreria de iconos lucide-react
import { ShoppingBag, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio", page: "inicio" },
  { label: "Electrónicos", page: "electronicos" },
  { label: "Ropa", page: "ropa" },
  { label: "Accesorios", page: "accesorios" },
  { label: "Contacto", page: "contacto" },
];

function Navbar({ onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <button className="logo" onClick={() => onNavigate("inicio")}>
          <div className="logo-icon">
            <ShoppingBag size={20} color="white" />
          </div>
          <span className="logo-text">
            Vende<span>Fácil</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="nav-links hidden-mobile">
          {navLinks.map((link) => (
            <button
              key={link.page}
              className="nav-button"
              onClick={() => onNavigate(link.page)}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile button */}
        <button
          className="menu-btn show-mobile"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu show-mobile">
          {navLinks.map((link) => (
            <button
              key={link.page}
              className="mobile-link"
              onClick={() => {
                onNavigate(link.page);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;