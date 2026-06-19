import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const STATS = [
  { num: "450+", label: "DSA Problems" },
  { num: "9.04", label: "CGPA" },
  { num: "3",    label: "Internships" },
  { num: "5+",   label: "Projects" },
];

const BADGES = [
  "IBM Hackathon 2025 Finalist",
  "100% B.Tech Scholarship",
  "Open To Work",
];

const About = () => {
  return (
    <section id="about" className="py-16 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full" />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Orbitron:wght@400;700;900&display=swap');
        .font-orbitron  { font-family: 'Orbitron', sans-serif; }
        .font-mono-tech { font-family: 'Share Tech Mono', monospace; }

        .about-tag-corners { position: relative; display: inline-block; }
        .about-tag-corners::before {
          content: ''; position: absolute;
          top: -1px; left: -1px;
          width: 6px; height: 6px;
          border-top: 1px solid #00ffcc;
          border-left: 1px solid #00ffcc;
        }
        .about-tag-corners::after {
          content: ''; position: absolute;
          bottom: -1px; right: -1px;
          width: 6px; height: 6px;
          border-bottom: 1px solid #00ffcc;
          border-right: 1px solid #00ffcc;
        }

        .cyber-btn-solid {
          font-family: 'Share Tech Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.2s ease;
        }
        .cyber-btn-solid:hover { filter: brightness(1.2); transform: translateY(-2px); }

        .cyber-btn-ghost {
          font-family: 'Share Tech Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          clip-path: polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%);
          transition: all 0.2s ease;
        }
        .cyber-btn-ghost:hover { border-color: #00ffcc !important; transform: translateY(-2px); }

        .stat-card {
          background: rgba(0,255,204,0.03);
          border: 1px solid rgba(0,255,204,0.1);
          border-radius: 8px;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .stat-card:hover {
          background: rgba(0,255,204,0.06);
          border-color: rgba(0,255,204,0.3);
        }

        .badge-pill {
          font-family: 'Share Tech Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          padding: 4px 12px;
          border-radius: 4px;
          background: rgba(0,255,204,0.06);
          border: 1px solid rgba(0,255,204,0.2);
          color: #00ffcc;
          white-space: nowrap;
        }

        .divider-line {
          width: 40px; height: 2px;
          background: #00ffcc;
          margin: 10px 0 0;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 uppercase tracking-[4px] text-sm font-mono-tech">
            ABOUT ME
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white mt-3">
            Who I Am
          </h2>
          <div className="w-16 h-[2px] bg-cyan-400 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT SIDE ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Tag */}
            <span className="about-tag-corners font-mono-tech text-[11px] tracking-[0.25em] text-cyan-400 border border-cyan-400/25 px-4 py-1.5">
              // profile.init()
            </span>

            {/* Headline */}
            <div>
              <h3 className="font-orbitron font-black text-white text-2xl md:text-3xl leading-tight">
                Full Stack Developer
              </h3>
              <h3 className="font-orbitron font-black text-cyan-400 text-2xl md:text-3xl leading-tight">
                & CS Student
              </h3>
              <div className="divider-line" />
            </div>

            {/* Bio */}
            <p className="font-mono-tech text-slate-400 text-sm leading-[1.9] border-l-2 border-cyan-400/30 pl-4">
              Final-year CS student at Amity University with a{" "}
              <span className="text-cyan-400">9.04 CGPA</span> and{" "}
              <span className="text-cyan-400">3 MERN stack internships</span>.
              Passionate about building scalable web apps, solving hard problems,
              and pushing into AI &amp; Machine Learning to create technology that
              actually matters.
            </p>

            {/* Achievement badges */}
            <div className="flex flex-wrap gap-2">
              {BADGES.map((b) => (
                <span key={b} className="badge-pill">{b}</span>
              ))}
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="stat-card px-3 py-4 text-center">
                  <p className="font-orbitron font-bold text-xl text-cyan-400">{s.num}</p>
                  <p className="font-mono-tech text-[9px] tracking-[0.12em] text-slate-600 uppercase mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            
          </motion.div>

          {/* ── RIGHT SIDE (unchanged) ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#0d1117] border border-zinc-800 rounded-3xl overflow-hidden max-w-[520px] h-[320px] mx-auto shadow-[0_0_20px_rgba(34,211,238,0.08)]">
              {/* Header */}
              <div className="flex items-center gap-2 px-5 py-4 bg-[#161b22]">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-zinc-400 text-sm ml-3">about-me.js</span>
              </div>

              {/* Typing Content */}
              <div className="p-6 h-[260px] overflow-hidden">
                <TypeAnimation
                  sequence={[
                    `const ayushi = {\n  name: "Ayushi Gupta",\n  role: "CS Engineering Student",\n  university: "Amity University",\n  cgpa: "9.04"\n};`,
                    2000,
                    `const ayushi = {\n  interests: [\n    "Web Development",\n    "AI & Machine Learning",\n    "Data Analytics",\n    "Problem Solving"\n  ],\n};`,
                    2000,
                    `const ayushi = {\n  skills: ["React.js", "Node.js","Express.js"],\n  focus: "AI & Machine Learning",\n  status: "Open To Work"\n};`,
                    2000,
                  ]}
                  wrapper="pre"
                  speed={60}
                  repeat={Infinity}
                  className="text-cyan-300 font-mono text-sm md:text-base leading-8 whitespace-pre-wrap"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
