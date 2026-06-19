
import { useState } from "react";

const PROJECTS = [
  {
    title: "StudyNotion",
    subtitle: "Full-Stack EdTech Platform",
    desc: "A full-stack EdTech platform for students and instructors with course management, JWT auth, role-based access, and Razorpay integration.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Tailwind"],
    github: "https://github.com/007Ayushi/Studynotion",
    live: "https://studynotion-frontend-updated.vercel.app/",
    accent: "#00ffcc",
    tag: "FULL STACK",
  },
  {
    title: "ChatApp",
    subtitle: "Real-Time Chat Application",
    desc: "Real-time messaging using Socket.IO with instant bi-directional communication, user auth, and online status tracking.",
    tech: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "Socket.IO"],
    github: "https://github.com/007Ayushi/Real-Time-Chat-App",
    live: "https://real-time-frontend-app.onrender.com/",
    accent: "#ff00aa",
    tag: "REAL-TIME",
  },
  {
    title: "Food Delivery",
    subtitle: "Food Delivery Web App",
    desc: "A fully responsive food delivery website with dynamic menu browsing, cart management, and a smooth ordering experience.",
    tech: ["React", "CSS", "JavaScript"],
    github: "https://github.com/007Ayushi/Projects",
    live: "https://fooddeliverywebsitebyayushi.netlify.app/",
    accent: "#ffaa00",
    tag: "WEB APP",
  },
  {
    title: "Netflix Analysis",
    subtitle: "Movie Data Analysis",
    desc: "Analyzed 9,000+ Netflix movies for trends in genres, ratings, and release patterns using Python data visualization libraries.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib"],
    github: "https://github.com/007Ayushi/Netflix-Movie-Data-Analysis-Project",
    live: null,
    accent: "#aa44ff",
    tag: "DATA SCIENCE",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
        .font-orbitron  { font-family: 'Orbitron', sans-serif; }
        .font-mono-tech { font-family: 'Share Tech Mono', monospace; }

        .proj-card {
          position: relative;
          background: #0a0a1a;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.25s ease, border-color 0.25s ease;
          cursor: default;
        }
        .proj-card:hover {
          transform: translateY(-4px);
        }
        .proj-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .proj-card:hover::before { opacity: 1; }

        .proj-card .corner-tl {
          position: absolute;
          top: 10px; left: 10px;
          width: 10px; height: 10px;
          border-top: 1px solid var(--accent);
          border-left: 1px solid var(--accent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .proj-card .corner-br {
          position: absolute;
          bottom: 10px; right: 10px;
          width: 10px; height: 10px;
          border-bottom: 1px solid var(--accent);
          border-right: 1px solid var(--accent);
          opacity: 0;
          transition: opacity 0.25s ease;
        }
        .proj-card:hover .corner-tl,
        .proj-card:hover .corner-br { opacity: 1; }

        .tech-pill {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          padding: 3px 10px;
          border-radius: 4px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #8899aa;
          white-space: nowrap;
        }

        .proj-btn {
          font-family: 'Share Tech Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          padding: 7px 16px;
          border-radius: 6px;
          transition: all 0.18s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .proj-btn-outline {
          background: transparent;
          border: 1px solid rgba(255,255,255,0.15);
          color: #8899aa;
        }
        .proj-btn-outline:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .proj-btn-filled {
          color: #020010;
          border: 1px solid transparent;
          font-weight: 700;
        }
        .proj-btn-filled:hover {
          filter: brightness(1.15);
          transform: translateY(-1px);
        }

        .section-line {
          width: 48px; height: 2px;
          margin: 10px auto 0;
          border-radius: 2px;
        }
      `}</style>

      <section
        id="projects"
        className="relative py-20 px-6 md:px-16 font-mono-tech"
        style={{ background: "#020010" }}
      >
        {/* Section header */}
        <div className="text-center mb-14">
          <p className="text-xs tracking-[0.35em] text-cyan-400 mb-3">// my work</p>
          <h2 className="font-orbitron font-black text-white text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div
            className="section-line"
            style={{ background: "#00ffcc", margin: "12px auto 0" }}
          />
          <p className="text-slate-500 text-sm mt-5 max-w-xl mx-auto leading-relaxed">
            Projects showcasing my experience in full-stack development, APIs, and real-time applications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          {PROJECTS.map((p, i) => (
            <div
              key={p.title}
              className="proj-card"
              style={{ "--accent": p.accent }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="corner-tl" />
              <div className="corner-br" />

              <div className="p-6">
                {/* Tag + Title row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span
                      className="text-[10px] tracking-[0.25em] font-semibold px-2 py-0.5 rounded mb-2 inline-block"
                      style={{
                        color: p.accent,
                        background: p.accent + "18",
                        border: `1px solid ${p.accent}33`,
                      }}
                    >
                      {p.tag}
                    </span>
                    <h3
                      className="font-orbitron font-bold text-lg text-white leading-tight"
                    >
                      {p.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 tracking-wide">
                      {p.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {p.desc}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="proj-btn proj-btn-outline"
                    style={{ "--accent": p.accent }}
                  >
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="proj-btn proj-btn-filled"
                      style={{ background: p.accent, "--accent": p.accent }}
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
