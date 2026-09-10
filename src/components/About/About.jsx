import "./About.css";

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <div className="heading-row">
        <h3>{title}</h3>
        <div className="accent-bar" />
      </div>
      <span>{subtitle}</span>
    </div>
  );
}

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container about-container">
        <SectionHeading
          title="About Me"
          subtitle="Background & Credentials"
        />

        <div className="about-grid">
          <div className="about-story">
            <div className="story-card">
              <div className="about-icon">
                <span className="material-symbols-outlined">psychology</span>
              </div>
              <p className="story-main">
                I'm Megha, a graduate pursuing my Master's in Computer
                Applications (MScCA). I have practical exposure to web
                development technologies and a genuine interest in building
                functional, user-friendly applications.
              </p>
              <p className="story-secondary">
                I'm focused on strengthening my technical foundation and
                constantly growing as a developer. I believe great frontend
                interfaces strike a balance between clean design, modular code,
                and thoughtful micro-interactions.
              </p>
              <div className="availability">
                <span className="material-symbols-outlined">check_circle</span>
                Available for Full-time and Internship roles
              </div>
            </div>
          </div>

          <div className="about-cards">
            <div className="info-card">
              <div className="info-header">
                <div className="info-title">
                  <div className="info-icon">
                    <span className="material-symbols-outlined">Edu</span>
                  </div>
                  <div>
                    <h4>Education</h4>
                    
                  </div>
                </div>
                
              </div>

              <div className="degree-list">
                <div className="degree">
                  <div>
                    <h5>BCA (Bachelor of Computer Applications)</h5>
                   <p>Core Fundamentals of programming and web development.</p>
                  </div>
                  <span>2022 – 2025</span>
                </div>

                <div className="degree">
                  <div>
                    <div className="degree-title">
                      <h5>MSc(CA) - Masters of Science in Computer Applications</h5>
                      <i />
                    </div>
                    <p>Advanced topics in web technologies and basic principles of cloud computing.</p>
                  </div>
                  <span className="current">2025 – Pursuing</span>
                </div>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-title">
                  <div className="info-icon">
                    <span className="material-symbols-outlined">work</span>
                  </div>
                  <div>
                    <h4>Experience</h4>
                 
                  </div>
                </div>
                
              </div>

              <div className="degree">
                <div>
                  <div className="degree-title">
                    <h5>On Job Training (Trainee)</h5>
                    <span className="company">• Aroma Brand Solutions</span>
                  </div>
                  <p>
                    Gained hands-on experience in web development at a marketing agency, contributing to responsive UI development, website functionality, and real-world digital projects.

                  </p>
                </div>
                <span>May 2026 – Jun 2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;