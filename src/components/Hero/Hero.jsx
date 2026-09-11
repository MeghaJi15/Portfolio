import "./Hero.css";

const techStack = [
  { icon: "html", name: "HTML5" },
  { icon: "javascript", name: "JavaScript"},
  { icon: "dataset", name: "ReactJS"},
  { icon: "terminal", name: "GitHub"},
  { icon: "integration_instructions", name: "VS Code"},
  { icon: "palette", name: "CSS",  }
];

function Hero() {
  return (
    <section className="hero-wrap" id="home">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="container hero">
        <div className="hero-content">
          <div className="status-pill">
            <span className="status-dot"><span /></span>
            Available for Frontend Roles
          </div>

          <div className="hero-heading">
            <h2>
              Hi, I'm <span>Megha</span>
            </h2>
            <h1>Frontend Developer</h1>
          </div>

          <p className="hero-bio">
            I build modern, responsive web experiences with React. I turn ideas
            into clean, interactive, and user-friendly web applications crafted
            with design precision.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="/Megha_More.pdf" download>
              <span className="material-symbols-outlined">download</span>
              Download Resume
            </a>
            <a className="secondary-btn" href="/Megha_V_More_Portfolio.pdf" download>
              <span className="material-symbols-outlined">download</span>
              Download Portfolio
            </a>
          </div>

        </div>

        <div className="stack-area">
          <div className="stack-card">
            <div className="stack-header">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="code-badge">Core Stack</span>
            </div>

            <div className="tech-grid">
              {techStack.map((tech) => (
                <div className={`tech-item ${tech.active ? "active" : ""}`} key={tech.name}>
                  <div className="tech-icon">
                    <span className="material-symbols-outlined">{tech.icon}</span>
                  </div>
                  <span className="tech-name">{tech.name}</span>
                  <span className="tech-desc">{tech.desc}</span>
                </div>
              ))}
            </div>

            <div className="stack-footer">
              <span className="material-symbols-outlined">bolt</span>
              Building UI with reusable React components and polished frontend workflows.
            </div>
          </div>
          <div className="stack-backdrop" />
        </div>
      </div>
    </section>
  );
}

export default Hero;