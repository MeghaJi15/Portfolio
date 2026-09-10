import "./Skills.css";

const skillGroups = [
  {
    icon: "UI",
    title: "Frontend Development",
    subtitle: "Core competencies in reactive web architecture",
    className: "frontend",
    items: ["HTML5", "CSS3", "React.js", "JavaScript", "Bootstrap", "Tailwind CSS"]
  },
  {
    icon: "DB",
    title: "Backend Knowledge",
    subtitle: "Server, Relational databases",
    className: "backend",
    items: ["PHP", "PostgreSQL", "MySQL"]
  },
  {
    icon: "BUILD",
    title: "Tools & Workflow",
    subtitle: "Developer toolchains",
    className: "tools",
    items: ["Git & GitHub", "VS Code" ]
  }
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="container skills-container">
        <div className="section-heading">
          <div className="heading-row">
            <h3>Skills & Expertise</h3>
            <div className="accent-bar" />
          </div>
          <span>Specialized Tools & Technologies</span>
        </div>

        <div className="skills-layout">
          <div className="skill-cards">
            {skillGroups.map((group) => (
              <div className={`skill-card ${group.className}`} key={group.title}>
                <div className="skill-title">
                  <div className="skill-icon">
                    <span className="material-symbols-outlined">{group.icon}</span>
                  </div>
                  <div>
                    <h4>{group.title}</h4>
                    <span>{group.subtitle}</span>
                  </div>
                </div>

                <div className="skill-items">
                  {group.items.map((item) => (
                    <div className={`skill-item ${item === "React.js" ? "highlight" : ""}`} key={item}>
                      <span className="material-symbols-outlined">check_circle</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="terminal">
            <div className="terminal-glow" />

            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <span>developer.config.js</span>
            </div>

            <div className="code-content">
              <div><em>const</em> <b>megha</b> = {"{"}</div>
              <div className="indent"><label>role:</label> <strong>"Frontend Developer"</strong>,</div>
              <div className="indent"><label>specialty:</label> <strong>"React Ecosystem"</strong>,</div>
              <div className="indent"><label>cleanCode:</label> <mark>true</mark>,</div>
              <div className="indent"><label>passion:</label> [</div>
              <div className="indent-2">"Interactive UI",</div>
              <div className="indent-2">"Design Systems",</div>
              <div className="indent-2">"Micro-animations"</div>
              <div className="indent">],</div>
              <div className="indent"><label>readyToCollaborate:</label> () =&gt; {"{"}</div>
              <div className="indent-2 return-line">return "Let's build something fast & beautiful!";</div>
              <div className="indent">{"}"}</div>
              <div>{"};"}</div>
              <div className="comment">// Ready to push to production</div>
              <div><em>export default</em> megha;</div>
            </div>

            <div className="terminal-footer">
              <span><span className="material-symbols-outlined">terminal</span>npm run dev — local: 3000</span>
              <b>&lt;/&gt;</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;