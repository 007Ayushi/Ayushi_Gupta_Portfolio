import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    
    <footer className="relative bg-[#050816] border-t border-cyan-500/10 overflow-hidden" id="contact">

      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        <div className="grid md:grid-cols-4 gap-10">

          {/* About */}
          <div>

            <p className="text-cyan-400 font-medium mb-2">
              Let's Connect!
            </p>

            <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent">
              AYUSHI GUPTA
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Full Stack Developer passionate about building
              modern web applications and solving real-world
              problems through technology.
            </p>

            <div className="flex gap-4 mt-6">

              <a
                href="https://www.linkedin.com/in/guptaayushi7/"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                rounded-xl
                bg-[#101c38]
                flex items-center justify-center
                text-white
                hover:bg-cyan-500
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
                transition-all duration-300
                "
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/007Ayushi"
                target="_blank"
                rel="noreferrer"
                className="
                w-12 h-12
                rounded-xl
                bg-[#101c38]
                flex items-center justify-center
                text-white
                hover:bg-cyan-500
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
                transition-all duration-300
                "
              >
                <FaGithub />
              </a>

              <a
                href="mailto:guptaayushi9693@gmail.com"
                className="
                w-12 h-12
                rounded-xl
                bg-[#101c38]
                flex items-center justify-center
                text-white
                hover:bg-cyan-500
                hover:-translate-y-1
                hover:shadow-[0_0_20px_rgba(34,211,238,.35)]
                transition-all duration-300
                "
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  About
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Skills
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Projects
                </a>
              </li>

              <li>
                <a
                  href="#experience"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#journey"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  My Journey
                </a>
              </li>

            </ul>

          </div>

          {/* Resources */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Resources
            </h3>

            <ul className="space-y-3 text-zinc-400">

              <li>
                <a
                  href="/Ayushi_Gupta_Resume_Fresher.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Resume
                </a>
              </li>

              <li>
                <a
                  href="https://github.com/007Ayushi"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  GitHub
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/guptaayushi7/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  LinkedIn
                </a>
              </li>

              <li>
                <a
                  href="mailto:guptaayushi9693@gmail.com"
                  className="hover:text-cyan-400 transition-all duration-300 hover:translate-x-1 inline-block"
                >
                  Email
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-4 text-zinc-400">

              <li>
                guptaayushi9693@gmail.com
              </li>

              <li>
                +91 96931 86733
              </li>

              <li>
               Bangalore, Karnataka, India
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom Bar */}
        <div
          className="
          border-t
          border-cyan-500/10
          mt-12
          pt-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >

          <p className="text-zinc-400 text-sm">
            © {new Date().getFullYear()} Ayushi Gupta.
            All Rights Reserved.
          </p>

          <p className="text-zinc-400 text-sm flex items-center gap-2">
            Made with
            <FaHeart className="text-red-500 animate-pulse" />
            by Ayushi Gupta
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;