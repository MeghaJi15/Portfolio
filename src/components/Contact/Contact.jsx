import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />

      <div className="container contact-container">
        <div className="section-heading">
          <div className="heading-row">
            <h3>Contact</h3>
            <div className="accent-bar" />
          </div>
          <span>Get In Touch</span>
        </div>

        <div className="contact-card">
          <div className="contact-grid">
            <div className="contact-info">
              <h4>Have a project in mind? Let's connect.</h4>
              <p>
                Looking for a frontend developer for your next project or
                engineering team? I build modern, responsive, and user-friendly
                web applications with a focus on clean design and great user
                experiences.
              </p>

              <div className="contact-pills">
                <div>
                  <span className="material-symbols-outlined">location_on</span>
                  Pune, Maharashtra, India
                </div>
                <div className="available-pill">
                  <span className="material-symbols-outlined">schedule</span>
                  Open to Immediate Joining
                </div>
              </div>

              <div className="social-links">
                <a href="https://github.com/MeghaJi15" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined">terminal</span>
                  GitHub Profile
                </a>
                <a href="https://www.linkedin.com/in/megh7/" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined">work</span>
                  LinkedIn Profile
                </a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=meghavmore15@gmail.com" target="_blank" rel="noreferrer">
                  <span className="material-symbols-outlined">mail</span>
                  Email Directly
                </a>
              </div>
            </div>

            <div className="message-box">
              <div className="message-title">
                <h5>Send a Message</h5>
                <span className="material-symbols-outlined">send</span>
              </div>

              <form onSubmit={handleSubmit}>
                <label>
                  <span>Your Name</span>
                  <input type="text" placeholder="e.g. Sarah Jenkins" required />
                </label>

                <label>
                  <span>Email Address</span>
                  <input type="email" placeholder="sarah@company.com" required />
                </label>

                <label>
                  <span>Message</span>
                  <textarea
                    placeholder="Tell me about the role, project, or collaboration opportunity..."
                    rows="3"
                    required
                  />
                </label>

                <button type="submit">
                  <span>{sent ? "Message Sent!" : "Send Message"}</span>
                  <span className="material-symbols-outlined">
                    {sent ? "check" : "arrow_forward"}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;