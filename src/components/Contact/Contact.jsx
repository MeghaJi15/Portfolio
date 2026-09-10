import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  // Your Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwiZHn2fPhU2hwBbJ6fxebXn40EeqAvNt4GjnfGeUnZ_mzC5tEximPcg0N-N3rBmzMeMA/exec"

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    setLoading(true);
    setSent(false);

    // Create hidden iframe
    const iframe = document.createElement("iframe");

    iframe.name = "google_sheet_iframe";
    iframe.style.display = "none";

    document.body.appendChild(iframe);

    // Create temporary form
    const googleForm = document.createElement("form");

    googleForm.action = GOOGLE_SCRIPT_URL;
    googleForm.method = "POST";
    googleForm.target = "google_sheet_iframe";
    googleForm.style.display = "none";

    // Name
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.name = "name";
    nameInput.value = form.elements.name.value;

    // Email
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.value = form.elements.email.value;

    // Message
    const messageInput = document.createElement("textarea");
    messageInput.name = "message";
    messageInput.value = form.elements.message.value;

    // Add fields to temporary form
    googleForm.appendChild(nameInput);
    googleForm.appendChild(emailInput);
    googleForm.appendChild(messageInput);

    // Add form to page
    document.body.appendChild(googleForm);

    // Submit to Google Apps Script
    googleForm.submit();

    // Give Google Apps Script time to save the data
    setTimeout(() => {
      setLoading(false);
      setSent(true);

      // Clear original form
      form.reset();

      // Remove temporary elements
      googleForm.remove();
      iframe.remove();

      // Return button to normal after 3 seconds
      setTimeout(() => {
        setSent(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" />

      <div className="container contact-container">

        {/* Heading */}
        <div className="section-heading">
          <div className="heading-row">
            <h3>Contact</h3>
            <div className="accent-bar" />
          </div>

          <span>Get In Touch</span>
        </div>

        {/* Contact Card */}
        <div className="contact-card">

          <div className="contact-grid">

            {/* LEFT SIDE */}
            <div className="contact-info">

              <h4>
                Have a project in mind? Let's connect.
              </h4>

              <p>
                Looking for a frontend developer for your next project or
                engineering team? I build modern, responsive, and user-friendly
                web applications with a focus on clean design and great user
                experiences.
              </p>

              {/* Contact Pills */}
              <div className="contact-pills">

                <div>
                  <span className="material-symbols-outlined">
                    location_on
                  </span>

                  Pune, Maharashtra, India
                </div>

                <div className="available-pill">
                  <span className="material-symbols-outlined">
                    schedule
                  </span>

                  Open to Immediate Joining
                </div>

              </div>

              {/* Social Links */}
              <div className="social-links">

                <a
                  href="https://github.com/MeghaJi15"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">
                    terminal
                  </span>

                  GitHub Profile
                </a>

                <a
                  href="https://www.linkedin.com/in/megh7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">
                    work
                  </span>

                  LinkedIn Profile
                </a>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=meghavmore15@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">
                    mail
                  </span>

                  Email Directly
                </a>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="message-box">

              <div className="message-title">

                <h5>Send a Message</h5>

                <span className="material-symbols-outlined">
                  send
                </span>

              </div>

              <form onSubmit={handleSubmit}>

                {/* NAME */}
                <label>
                  <span>Your Name</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="e.g. Sarah Jenkins"
                    required
                  />
                </label>

                {/* EMAIL */}
                <label>
                  <span>Email Address</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="sarah@company.com"
                    required
                  />
                </label>

                {/* MESSAGE */}
                <label>
                  <span>Message</span>

                  <textarea
                    name="message"
                    placeholder="Tell me about the role, project, or collaboration opportunity..."
                    rows="3"
                    required
                  />
                </label>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                >

                  <span>
                    {loading
                      ? "Sending..."
                      : sent
                      ? "Message Sent!"
                      : "Send Message"}
                  </span>

                  <span className="material-symbols-outlined">
                    {loading
                      ? "hourglass_empty"
                      : sent
                      ? "check"
                      : "arrow_forward"}
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