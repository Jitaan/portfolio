import { useEffect, useRef, useState } from "react";
import "./App.css";

const commands = {
  help: [
    "Available commands:",
    "  about       a little about me",
    "  projects    selected work",
    "  skills      tools I work with",
    "  contact     get in touch",
    "  clear       reset the terminal",
  ],
  about: [
    "I’m currently a Computer Science and Engineering student at VIT Vellore with a specialization in Data Science. ",
    "My interests lie at the intersection of AI, NLP, and software development, where I enjoy turning ideas into practical, user-focused solutions.",
    "Besides academics and building stuff, I serve as the Technical Head of SAE-VIT."
  ],
  projects: [
    "01  ASTITVA                  Self-sovereign identity mobile app",
    "02  SAE-VIT WEBSITE          Official chapter website",
    "03  CODEBENCH                Real-time Python coding platform",
    "04  VITALSENSE               Arduino health monitoring system",
  ],
  skills: [
    "Languages: Java, Python, C/C++, JavaScript",
    "Frameworks: React, Node.js, Flask, FastAPI",
    "Tools: MySQL, Supabase, Git, Arduino",
  ],
  contact: [
    "email: jitaanbanerjee@gmail.com",
    "github: https://github.com/Jitaan",
    "linkedin: https://linkedin.com/in/jitaan",
  ],
};

function App() {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("portfolio-theme-v2") !== "light",
  );
  const [lines, setLines] = useState([
    { text: "Last login: today from the internet", muted: true },
    { text: "Welcome to jitaan.xyz — type help to explore.", accent: true },
  ]);
  const [input, setInput] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  useEffect(() => inputRef.current?.focus(), []);
  useEffect(() => {
    const terminalBody = terminalBodyRef.current;
    if (terminalBody) {
      terminalBody.scrollTop = terminalBody.scrollHeight;
    }
  }, [lines]);
  useEffect(
    () => localStorage.setItem("portfolio-theme-v2", isDark ? "dark" : "light"),
    [isDark],
  );

  const execute = (raw) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setLines([]);
      setInput("");
      return;
    }
    const response = commands[command] || [
      `Command not found: ${command}`,
      "Type help to see the available commands.",
    ];
    setLines((current) => [
      ...current,
      { prompt: raw },
      ...response.map((text) => ({ text })),
    ]);
    setInput("");
  };

  return (
    <main
      className={`site-shell ${isDark ? "dark-theme" : ""}`}
      onClick={() => inputRef.current?.focus()}
    >
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Jitaan home">
          <span>J</span> jitaan.xyz
        </a>
        <div className="nav-links">
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="primary-menu"
          >
            <span />
            <span />
            <span />
          </button>
          <div
            className={`nav-menu ${isMenuOpen ? "is-open" : ""}`}
            id="primary-menu"
          >
            <a href="/resume">Resume</a>
            <div className="nav-social-links" aria-label="Contact links">
              <a
                href="https://github.com/Jitaan"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a href="mailto:jitaanbanerjee@gmail.com">Email</a>
              <a
                href="https://linkedin.com/in/jitaan"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <button
            className="theme-toggle"
            type="button"
            onClick={() => setIsDark((current) => !current)}
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
                <path
                  d="M12 4V2m0 20v-2m5.66-13.66 1.41-1.41m-14.14 14.14 1.41-1.41M20 12h2M2 12h2m13.66 5.66 1.41 1.41M4.93 4.93l1.41 1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      <section className="home-content" id="top">
        <div className="intro-panel">
          <div className="eyebrow">
            <i /> Available for collaborations
          </div>
          <p className="intro-label">Hello, I&apos;m Jitaan Banerjee.</p>
          <h1>
            I build ideas
            <br />
            <em>into useful things.</em>
          </h1>
          <p className="hero-copy">
            Click the button below to know more about me.<br></br> If you're a recruiter, you can find my resume <a href="/resume">here</a>.
            {/*  */}
          </p>
          <button
            className="run-about-button"
            type="button"
            onClick={() => execute("about")}
          >
            More About Me
          </button>
        </div>
        <section className="console-section" aria-label="Interactive terminal">
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <div className="window-dots">
                <i />
                <i />
                <i />
              </div>
              <span>visitor@jitaan: ~</span>
              <button type="button" onClick={() => setLines([])}>
                clear
              </button>
            </div>
            <div className="terminal-body" ref={terminalBodyRef}>
              {lines.map((line, index) =>
                line.prompt ? (
                  <p className="terminal-line" key={`${line.prompt}-${index}`}>
                    <b>visitor@jitaan</b>
                    <span>:~$</span> {line.prompt}
                  </p>
                ) : (
                  <p
                    className={`terminal-line ${line.muted ? "muted" : ""} ${line.accent ? "accent" : ""}`}
                    key={`${line.text}-${index}`}
                  >
                    {line.text}
                  </p>
                ),
              )}
              <form
                className="terminal-input"
                onSubmit={(event) => {
                  event.preventDefault();
                  execute(input);
                }}
              >
                <label htmlFor="command">
                  <b>visitor@jitaan</b>
                  <span>:~$</span>
                </label>
                <input
                  ref={inputRef}
                  id="command"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  autoComplete="off"
                  spellCheck="false"
                  aria-label="Terminal command"
                />
              </form>
            </div>
            <div className="terminal-hint">
              <span>
                Try{" "}
                <button type="button" onClick={() => execute("help")}>
                  help
                </button>
                ,{" "}
                <button type="button" onClick={() => execute("projects")}>
                  projects
                </button>
                , or{" "}
                <button type="button" onClick={() => execute("contact")}>
                  contact
                </button>
              </span>
              <span>↵ enter</span>
            </div>
          </div>
        </section>
      </section>
      <footer>
        <span> © {new Date().getFullYear()} Jitaan Banerjee</span>
        <span>Built with care, coffee &amp; React.</span>
        <a href="https://github.com/Jitaan/portfolio" target="_blank" rel="noreferrer">
          GitHub ↗
        </a>
      </footer>
    </main>
  );
}

export default App;
