import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-code">&lt;/&gt;</span>
          <span className="brand-name">Megha V More</span>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a className="active" href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="header-actions">
          <a className="resume-btn desktop-resume" href="/Megha_More.pdf" download>
            Resume
          </a>

        

          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;