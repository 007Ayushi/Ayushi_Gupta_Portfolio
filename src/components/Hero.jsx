import { useEffect, useRef, useState } from "react";

const ROLES = [
  "Software Developer",
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Problem Solver",
];

const SKILLS = [
  { label: "React.js",    color: "text-pink-400 border-pink-400/40" },
  { label: "Node.js",     color: "text-cyan-400 border-cyan-400/40" },
  { label: "MongoDB",     color: "text-purple-400 border-purple-400/40" },
  { label: "Python / ML", color: "text-amber-400 border-amber-400/40" },
  { label: "Java / DSA",   color: "text-blue-400 border-blue-400/40" },
];

const STATS = [
  { num: "450+", label: "DSA Solved" },
  { num: "9.04", label: "CGPA" },
  { num: "5+",   label: "Projects" },
];

export default function Hero() {
  const [typed, setTyped]       = useState("");
  const [roleIdx, setRoleIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [deleting, setDeleting] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const current = ROLES[roleIdx];
    clearTimeout(timerRef.current);
    if (!deleting) {
      if (charIdx < current.length) {
        timerRef.current = setTimeout(() => {
          setTyped(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, 70);
      } else {
        timerRef.current = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIdx > 0) {
        timerRef.current = setTimeout(() => {
          setTyped(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, 40);
      } else {
        setDeleting(false);
        setRoleIdx((r) => (r + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timerRef.current);
  }, [charIdx, deleting, roleIdx]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
        .font-orbitron  { font-family: 'Orbitron', sans-serif; }
        .font-mono-tech { font-family: 'Share Tech Mono', monospace; }

        .cyber-grid-bg {
          background-image:
            linear-gradient(rgba(0,255,204,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,204,0.04) 1px, transparent 1px);
          background-size: 44px 44px;
          animation: gridScroll 18s linear infinite;
        }
        @keyframes gridScroll {
          from { transform: translateY(0); }
          to   { transform: translateY(44px); }
        }
        .scanlines {
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px
          );
        }
        .glitch-text { position: relative; color: #00ffcc; }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute; top: 0; left: 0;
          font-family: 'Orbitron', sans-serif;
          font-weight: 900; font-size: inherit;
        }
        .glitch-text::before {
          color: #ff00aa;
          clip-path: polygon(0 20%, 100% 20%, 100% 45%, 0 45%);
          animation: glitchA 3.5s infinite;
        }
        .glitch-text::after {
          color: #00ffff;
          clip-path: polygon(0 60%, 100% 60%, 100% 78%, 0 78%);
          animation: glitchB 3.5s infinite;
        }
        @keyframes glitchA {
          0%,88%,100% { transform:translateX(0); opacity:0; }
          90% { transform:translateX(-4px); opacity:.85; }
          93% { transform:translateX(3px);  opacity:.6;  }
          95% { opacity:0; }
        }
        @keyframes glitchB {
          0%,82%,100% { transform:translateX(0); opacity:0; }
          84% { transform:translateX(4px);  opacity:.7; }
          87% { transform:translateX(-3px); opacity:.5; }
          89% { opacity:0; }
        }
        .cyber-clip {
          clip-path: polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%);
        }
        .cursor-blink { animation: blink .75s step-end infinite; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .pill-float { animation: floatPill 3.2s ease-in-out infinite; }
        @keyframes floatPill {
          0%,100% { transform: translateX(0); }
          50%      { transform: translateX(-8px); }
        }
        .cyber-tag-corners { position: relative; }
        .cyber-tag-corners::before {
          content:''; position:absolute; top:-1px; left:-1px;
          width:7px; height:7px;
          border-top:1px solid #00ffcc; border-left:1px solid #00ffcc;
        }
        .cyber-tag-corners::after {
          content:''; position:absolute; bottom:-1px; right:-1px;
          width:7px; height:7px;
          border-bottom:1px solid #00ffcc; border-right:1px solid #00ffcc;
        }
      `}</style>

      <section className="relative min-h-screen w-full bg-[#020010] overflow-hidden font-mono-tech">

        {/* Backgrounds */}
        <div className="cyber-grid-bg absolute inset-0 pointer-events-none" />
        <div className="scanlines absolute inset-0 pointer-events-none" />

        {/* Corner brackets */}
        <div className="absolute top-5 left-5 w-16 h-16 border-t border-l border-cyan-400/30 pointer-events-none" />
        <div className="absolute bottom-5 right-5 w-16 h-16 border-b border-r border-pink-500/30 pointer-events-none" />
        <div className="absolute bottom-12 left-10 w-24 h-px bg-gradient-to-r from-cyan-400 to-transparent" />

        {/* ── Main layout: left content + right pills ── */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-10 px-10 md:px-16 py-20">

            {/* LEFT */}
            <div className="flex flex-col justify-center">

              {/* Tag */}
              <span className="cyber-tag-corners inline-block w-fit text-xs tracking-[0.25em] text-cyan-400 border border-cyan-400/25 px-4 py-1.5 mb-7">
                // initializing profile
              </span>

              {/* Name — nowrap so it never breaks */}
              <h1 className="font-orbitron font-black text-white leading-none mb-3 whitespace-nowrap"
                  style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}>
                Hi, I'm&nbsp;
                <span className="glitch-text" data-text="Ayushi Gupta">
                  Ayushi Gupta
                </span>
              </h1>

              {/* Meta */}
              <p className="text-xs tracking-[0.2em] text-slate-500 mb-5">
                AMITY UNIVERSITY · CS '26 · CGPA 9.04
              </p>

              {/* Typing */}
              <div className="flex items-center gap-0.5 text-lg md:text-xl text-slate-300 mb-5 min-h-[28px]">
                <span>{typed}</span>
                <span className="cursor-blink inline-block w-0.5 h-[1.2em] bg-cyan-400" />
              </div>

              {/* Bio */}
              <div className="flex flex-col gap-1.5 text-sm md:text-base text-slate-500 leading-relaxed mb-8">
                <span>&gt; Building modern web apps &amp; solving real-world problems.</span>
                <span>&gt; Exploring AI/ML to create impactful digital systems.</span>
                <span>
                  &gt; 450+ DSA problems solved. Status:{" "}
                  <strong className="text-cyan-400 font-normal">OPEN TO WORK</strong>
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 flex-wrap mb-10">
                <a
                  href="/Ayushi_Gupta_Resume_Fresher.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-clip font-mono-tech text-xs tracking-[0.2em] uppercase px-8 py-3 bg-cyan-400 text-[#020010] hover:bg-cyan-300 transition-all hover:-translate-y-0.5 no-underline font-bold"
                >
                  Resume
                </a>
                <a
                  href="mailto:guptaayushi9693@gmail.com"
                  className="cyber-clip font-mono-tech text-xs tracking-[0.2em] uppercase px-8 py-3 bg-transparent text-cyan-400 border border-cyan-400/40 hover:border-cyan-400 transition-all hover:-translate-y-0.5 no-underline"
                >
                  Email Me
                </a>
              </div>

              {/* Stats */}
              <div className="flex gap-10 flex-wrap">
                {STATS.map((s) => (
                  <div key={s.label} className="flex flex-col">
                    <span className="font-orbitron font-bold text-3xl md:text-4xl text-cyan-400">{s.num}</span>
                    <span className="text-[10px] tracking-[0.18em] text-slate-600 uppercase mt-1">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — pills column, centered vertically */}
            <div className="hidden lg:flex flex-col justify-center gap-4">
              {SKILLS.map((sk, i) => (
                <span
                  key={sk.label}
                  className={`pill-float font-mono-tech text-xs tracking-[0.12em] px-5 py-2.5 border ${sk.color} whitespace-nowrap text-center`}
                  style={{ animationDelay: `${i * 0.4}s` }}
                >
                  {sk.label}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
