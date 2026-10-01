import { useState } from "react";
import "./App.css";
import "./Resume.css";

const education = [
  {
    school: "Vellore Institute of Technology",
    degree:
      "B.Tech in Computer Science, specialization in Data Science | CGPA: 8.87",
    dates: "Jul 2024 — Jun 2028",
  },
  {
    school: "Delhi Public School, Ruby Park",
    degree: "Higher Secondary Education (Class XII)",
    dates: "Apr 2009 — Mar 2024",
  },
];
const projects = [
  {
    name: "Astitva",
    stack: "React Native (Expo), Express.js, Blockchain, JavaScript",
    dates: "Feb 2026",
    points: [
      "Built a self-sovereign identity mobile application for decentralized digital identity management.",
      "Implemented QR scanning and generation for secure credential sharing and verification in under 5 seconds.",
      "Designed the mobile UI, navigation, camera access, and secure credential storage.",
    ],
  },
  {
    name: "SAE-VIT Website",
    stack: "React, Vite, Sanity CMS, JavaScript, Vercel",
    dates: "Feb 2026 — Jun 2026",
    points: [
      "Engineered the website for VIT Vellore’s automotive engineering chapter.",
      "Integrated a CMS for announcements, blogs, and event updates.",
    ],
  },
  {
    name: "CodeBench",
    stack: "React, Vite, Python, Flask API, Express.js, Supabase",
    dates: "Mar 2026",
    points: [
      "Built a real-time Python coding environment with execution and testing under 2 seconds.",
      "Integrated Google and GitHub OAuth with dynamic program input and output rendering.",
    ],
  },
];

function ResumeSection({ title, children }) {
  return (
    <section className="resume-section-text">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

export default function Resume() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("portfolio-theme-v2") !== "light",
  );
  return (
    <main className={`resume-shell ${isDark ? "dark-theme" : ""}`}>
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Jitaan home">
          <span>J</span> jitaan.dev
        </a>
        <div className="nav-links">
          <a href="/resume">Resume</a>
          <div className="nav-social-links" aria-label="Contact links">
            <a
              href="https://github.com/Jitaan"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a href="mailto:jitaanbanerjee@gmail.com">Email</a>
            <a
              href="https://linkedin.com/in/jitaan"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => {
              const nextTheme = !isDark;
              setIsDark(nextTheme);
              localStorage.setItem(
                "portfolio-theme-v2",
                nextTheme ? "dark" : "light",
              );
            }}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            aria-pressed={isDark}
          >
            <svg
              className="theme-icon"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isDark ? (
                <path d="M20.4 15.2A8.6 8.6 0 0 1 8.8 3.6 8.6 8.6 0 1 0 20.4 15.2Z" />
              ) : (
                <path d="M12 4V2m0 20v-2m5.66-13.66 1.41-1.41m-14.14 14.14 1.41-1.41M20 12h2M2 12h2m13.66 5.66 1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <div className="resume-page">
        <header className="resume-intro">
          <div className="resume-contact">
            <h1>Jitaan Banerjee</h1>
            <p>
              Vellore, Tamil Nadu <i />{" "}
              <a href="mailto:jitaanbanerjee@gmail.com">
                jitaanbanerjee@gmail.com
              </a>{" "}
              <i />{" "}
              <a
                href="https://linkedin.com/in/jitaan"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/jitaan
              </a>
            </p>
          </div>
          <a
            className="resume-download"
            href="/Jitaan_Banerjee_Resume.pdf"
            download="Jitaan_Banerjee_Resume.pdf"
          >
            Download ↓
          </a>
        </header>
        <ResumeSection title="Education">
          {education.map((item) => (
            <article className="resume-item" key={item.school}>
              <div className="resume-item-top">
                <h3>{item.school}</h3>
                <time>{item.dates}</time>
              </div>
              <p>{item.degree}</p>
            </article>
          ))}
        </ResumeSection>
        <ResumeSection title="Experience">
          <article className="resume-item">
            <div className="resume-item-top">
              <h3>Technical Head</h3>
              <time>Jan 2026 — Present</time>
            </div>
            <p>
              Society of Automotive Engineers (SAE-VIT) · Vellore, Tamil Nadu
            </p>
            <ul>
              <li>
                Implementing the chapter website for 100+ members and event
                participants.
              </li>
              <li>
                Co-organized the SAE-VIT Drone Racing League with 50+
                participants from colleges across India.
              </li>
              <li>
                Created a PyGame vehicle simulation for 2D track-based movement
                testing.
              </li>
            </ul>
          </article>
        </ResumeSection>
        <ResumeSection title="Projects">
          {projects.map((project) => (
            <article className="resume-item" key={project.name}>
              <div className="resume-item-top">
                <h3>{project.name}</h3>
                <time>{project.dates}</time>
              </div>
              <p>{project.stack}</p>
              <ul>
                {project.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </ResumeSection>
        <ResumeSection title="Technical skills">
          <div className="skills-list">
            <p>
              <b>Languages</b> Java, Python, C/C++, JavaScript
            </p>
            <p>
              <b>Frameworks</b> React, Node.js, Flask, FastAPI
            </p>
            <p>
              <b>Web & data</b> HTML, CSS, REST APIs, JSON, MySQL, Supabase
            </p>
            <p>
              <b>Tools</b> Git, VS Code, PyCharm, Arduino
            </p>
            <p>
              <b>Spoken</b> English, Hindi, Bengali
            </p>
          </div>
        </ResumeSection>
      </div>
      <footer>
        <span>© {new Date().getFullYear()} Jitaan</span>
        <span>Built with care, coffee &amp; React.</span>
        <a href="https://github.com/Jitaan" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </main>
  );
}
