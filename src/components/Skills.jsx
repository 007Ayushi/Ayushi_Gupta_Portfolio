import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 md:py-24 bg-transparent relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/5 blur-[150px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400/5 blur-[150px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Heading */}
        <div className="text-center mb-10">

          <h2
            className="
            text-3xl
            md:text-4xl
            font-semibold
            tracking-tight
            text-white
            "
          >
            Tech Stack
          </h2>

          <div className="w-16 h-[2px] bg-cyan-400 rounded-full mx-auto mt-3"></div>

          <p
            className="
            mt-4
            text-sm
            md:text-base
            text-zinc-400
            max-w-xl
            mx-auto
            leading-relaxed
            "
          >
            Technologies and tools I use for web development,
            problem solving, and continuous learning.
          </p>

        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              className="
              bg-[#0f0f0f]
              border
              border-zinc-800
              rounded-3xl
              p-7

              hover:border-cyan-400/40
              hover:shadow-[0_0_25px_rgba(34,211,238,0.08)]

              transition-all
              duration-300
              "
            >

              <div className="w-10 h-[3px] bg-cyan-400 rounded-full mb-4"></div>

              <h3 className="text-xl font-semibold text-white mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={i}
                      className="
                      flex
                      items-center
                      gap-2

                      px-3
                      py-2

                      bg-zinc-900
                      border
                      border-zinc-700

                      rounded-xl

                      hover:bg-zinc-800
                      hover:border-cyan-400/50

                      transition-all
                      duration-300
                      "
                    >
                      <Icon
                        className={`
                        text-lg
                        ${skill.color}
                        `}
                      />

                      <span
                        className="
                        text-zinc-200
                        text-sm
                        font-medium
                        "
                      >
                        {skill.name}
                      </span>

                    </div>
                  );
                })}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;