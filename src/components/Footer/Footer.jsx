import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-copy">
          <span>Megha V More</span>
          <small>© 2025 Megha V More. Crafted with frontend precision.</small>
        </div>

        <div className="footer-location">
          <span className="material-symbols-outlined">location_on</span>
          <span>Pune, India</span>
        </div>

        <div className="footer-links">
          <a href="#contact">
            <span className="material-symbols-outlined">terminal</span>
            GitHub
          </a>
          <a href="#contact">
            <span className="material-symbols-outlined">work</span>
            LinkedIn
          </a>
          <a href="mailto:megha@example.com">
            <span className="material-symbols-outlined">mail</span>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;