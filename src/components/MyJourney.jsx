import { motion } from "framer-motion";
import { educationData } from "../data/education";

const MyJourney = () => {
  return (
    <section
      id="journey"
      className="py-20 bg-transparent relative overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 blur-[180px] rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">

        {/* Heading */}

        <div className="text-center mb-12">

          <p className="text-cyan-400 text-xs uppercase tracking-[6px] mb-2">
            TIMELINE
          </p>

          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-white">
            My Journey
          </h2>

          <div className="w-20 h-[2px] bg-cyan-400 mx-auto rounded-full mt-3"></div>

          <p className="text-zinc-400 mt-3 max-w-2xl mx-auto text-sm md:text-base">
            From academic excellence to hackathons, projects and
            problem-solving experiences that shaped my journey in tech.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Center Line */}

          <div
            className="
            absolute
            left-6
            md:left-1/2
            md:-translate-x-1/2
            top-0
            bottom-0
            w-[2px]
            bg-gradient-to-b
            from-cyan-400
            via-cyan-500
            to-transparent
            "
          ></div>

          {educationData.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
              }}
              className={`
                relative
                mb-4
                flex
                ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }
              `}
            >

              {/* Timeline Dot */}

              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 10px #22d3ee",
                    "0 0 25px #22d3ee",
                    "0 0 10px #22d3ee",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                absolute
                left-6
                md:left-1/2
                md:-translate-x-1/2

                w-5
                h-5

                bg-cyan-400
                rounded-full

                border-2
                border-[#050816]
                "
              />

              {/* Card */}

              <div
                className={`
                ml-14
                md:ml-0

                md:w-[43%]

                ${
                  index % 2 === 0
                    ? "md:mr-10"
                    : "md:ml-10"
                }

                bg-[#0f172a]/50
                backdrop-blur-xl

                border
                border-zinc-800

                rounded-2xl
                p-5

                hover:border-cyan-400/40
                hover:shadow-[0_0_25px_rgba(34,211,238,0.12)]

                transition-all
                duration-300
                `}
              >

                {/* Year */}

                <div
                  className="
                  inline-flex
                  items-center

                  px-3
                  py-1

                  rounded-full

                  bg-cyan-500/10
                  border
                  border-cyan-500/20

                  text-cyan-400
                  text-xs
                  font-medium

                  mb-3
                  "
                >
                  {item.year}
                </div>

                {/* Title */}

                <h3 className="text-xl font-semibold text-white mb-1">
                  {item.title}
                </h3>

                {/* Institution */}

                <p className="text-cyan-200/70 text-sm mb-4">
                  {item.institution}
                </p>

                {/* Achievements */}

                <div className="flex flex-wrap gap-2">

                  {item.achievements.map((achievement, i) => (

                    <span
                      key={i}
                      className="
                      px-3
                      py-1

                      text-xs

                      rounded-full

                      bg-zinc-900
                      border
                      border-zinc-700

                      text-zinc-300
                      "
                    >
                      {achievement}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

          {/* End Node */}

          <div className="flex justify-center mt-8">

            <div className="text-center">

              <div
                className="
                w-5
                h-5

                rounded-full
                bg-cyan-400

                mx-auto

                shadow-[0_0_20px_#22d3ee]
                "
              ></div>

              <p className="mt-3 text-cyan-400 text-sm">
                🚀 Still Growing...
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MyJourney;