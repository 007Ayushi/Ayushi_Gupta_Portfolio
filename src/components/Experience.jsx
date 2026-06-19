import { motion } from "framer-motion";
import { experiences } from "../data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 md:py-24 bg-transparent relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Experience
          </h2>

          <div className="w-16 h-[2px] bg-cyan-400 mx-auto rounded-full mt-3"></div>

          <p className="mt-4 text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
            My professional journey and internship experiences.
          </p>

        </div>

        {/* Timeline */}
        <div className="relative">

          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[2px] bg-zinc-800"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`
              relative mb-10
              flex
              ${index % 2 === 0
                ? "md:justify-start"
                : "md:justify-end"}
              `}
            >

              {/* Dot */}
              <div
                className="
                absolute
                left-4
                md:left-1/2
                md:-translate-x-1/2

                w-4
                h-4

                bg-cyan-400
                rounded-full
                border-4
                border-black
                "
              ></div>

              {/* Card */}
              <div
                className="
                ml-12
                md:ml-0

                md:w-[45%]

                bg-[#0f0f0f]
                border
                border-zinc-800

                rounded-3xl
                p-6

                hover:border-cyan-400/40
                transition-all
                duration-300
                "
              >
                <h3 className="text-xl font-semibold text-white">
                  {exp.role}
                </h3>

                <p className="text-cyan-400 mt-1">
                  {exp.company}
                </p>

                <p className="text-sm text-zinc-500 mt-1 mb-4">
                  {exp.duration}
                </p>

                <ul className="space-y-2">
                  {exp.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-zinc-400 text-sm"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;