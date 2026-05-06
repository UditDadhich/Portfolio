import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-32 px-6 max-w-6xl mx-auto relative"
    >

      {/* Glow */}
      <div className="absolute left-0 top-20 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-20"
        >
          Education
        </motion.h2>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-br
            from-white/10
            to-white/5
            backdrop-blur-xl
            p-10 md:p-14
            shadow-[0_0_40px_rgba(255,255,255,0.03)]
          "
        >

          {/* Animated Glow */}
          <div className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[250px]
            h-[250px]
            bg-cyan-500/10
            blur-[100px]
            rounded-full
          " />

          <div className="relative z-10">

            {/* Degree */}
            <h3 className="text-3xl font-semibold leading-tight">
              B.Tech in Computer Science & Engineering
            </h3>

            {/* Institute */}
            <p className="mt-4 text-xl text-cyan-300">
              Indian Institute of Information Technology Dharwad
            </p>

            {/* Duration */}
            <p className="mt-3 text-gray-400">
              2024 — 2028
            </p>

            {/* CGPA */}
            <div className="mt-10 flex flex-wrap gap-4">

              <div className="
                px-6
                py-3
                rounded-2xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
              ">
                <p className="text-sm text-gray-400">
                  Current CGPA
                </p>

                <h4 className="text-2xl font-bold mt-1">
                  8.5 / 10
                </h4>
              </div>

              <div className="
                px-6
                py-3
                rounded-2xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
              ">
                <p className="text-sm text-gray-400">
                  Focus Areas
                </p>

                <h4 className="text-lg font-semibold mt-1">
                  MERN • DSA • System Design
                </h4>
              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default Education;