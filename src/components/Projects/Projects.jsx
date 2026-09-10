import "./Projects.css";

const projects = [
  {
    type: "AI Interface",
    icon: "smart_toy",
    visual: "chat",
    title: "University Chatbot",
    description:
      "A web-based AI chatbot built using ReactJS that provides students with quick and interactive assistance for common university-related queries.",
    tags: ["HTML", "CSS", "JavaScript", "React.js"],
    github: "https://github.com/MeghaJi15/university-chatbot",
    liveDemo: "https://university-chatbot-gilt.vercel.app/"
  },
  {
    type: "Web App",
    icon: "shopping_bag",
    visual: "shop",
    title: "E-Commerce Platform",
    description:
      "An e-commerce platform inspired by Myntra, featuring category filtering, real-time client-side search, persistent cart states, and responsive design.",
    tags: ["React", "Tailwind CSS", "Vite", "React Router"],
    github: "https://github.com/MeghaJi15/E-Commerce",
    liveDemo: "https://e-commerce-green-five-28.vercel.app/"
  },
  {
    type: "SaaS Dashboard",
    icon: "analytics",
    visual: "analytics",
    title: "Restaurant Dashboard",
    description:
      "A comprehensive management dashboard for restaurants with order fulfillment, live inventory trackers, revenue analytics, menu management, and staff rosters.",
    tags: ["React", "Tailwind CSS", "Vite", "Analytics"],
    github: "https://github.com/MeghaJi15/Restaurant_dashboard",
    liveDemo: "https://restaurant-dashboard-ten-ashy.vercel.app/"
  }
];

function ProjectVisual({ project }) {
  if (project.visual === "chat") {
    return (
      <div className="project-visual chat-visual">
        <div className="visual-top">
          <span>AI Interface</span>
          <i><span className="material-symbols-outlined">{project.icon}</span></i>
        </div>
        <div className="chat-preview">
          <div>
            <span className="online-dot" />
            <strong>Chatbot Online</strong>
          </div>
          <p>"Hey there 👋 How can I help you today with admission & course details?"</p>
        </div>
      </div>
    );
  }

  if (project.visual === "shop") {
    return (
      <div className="project-visual shop-visual">
        <div className="visual-top">
          <span>Web App</span>
          <i><span className="material-symbols-outlined">{project.icon}</span></i>
        </div>
        <div className="shop-preview">
          <div>
            <strong>Super Sale 50%</strong>
            <b>Fashion Hub</b>
          </div>
          <span>React Router</span>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual analytics-visual">
      <div className="visual-top">
        <span>SaaS Dashboard</span>
        <i><span className="material-symbols-outlined">{project.icon}</span></i>
      </div>
      <div className="analytics-preview">
        <div>
          <strong>Live Orders & Billing</strong>
          <b>+18.4%</b>
        </div>
        <div className="progress-track"><span /></div>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container projects-container">
        <div className="projects-heading">
          <div className="section-heading">
            <div className="heading-row">
              <h3>Featured Projects</h3>
              <div className="accent-bar" />
            </div>
            <span>Practical Application & Frontend Code</span>
          </div>

          <div className="production-badge">
            <span className="material-symbols-outlined">verified</span>
            Responsive & Production-Ready
          </div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <ProjectVisual project={project} />

              <div className="project-details">
                <div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>

                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className={tag === "React.js" || tag === "React" ? "react-tag" : ""} key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <span className="material-symbols-outlined">terminal</span>
                    GitHub
                  </a>
                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo
                    <span className="material-symbols-outlined">north_east</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;