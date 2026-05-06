import { motion } from "framer-motion";
import MagneticButton from "../components/MagneticButton";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-purple-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-blue-600/20 blur-[140px] rounded-full" />

      <div className="text-center z-10 max-w-4xl">

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >

          <span className="text-white">
            Udit
          </span>{" "}

          <span className="text-gray-500">
            Dadhich
          </span>

        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Full Stack Developer specializing in MERN stack,
          scalable backend systems, and real-time web applications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex flex-wrap justify-center gap-5"
        >

          {/* GitHub */}
          <a
            href="https://github.com/UditDadhich"
            target="_blank"
            className="
              px-7
              py-3.5
              bg-white
              text-black
              rounded-2xl
              font-medium
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
            "
          >
          <MagneticButton>
            GitHub
          </MagneticButton>
          </a>

          {/* Projects */}
          <a
            href="#projects"
            className="
              px-7
              py-3.5
              border
              border-white/20
              rounded-2xl
              hover:bg-white/10
              transition-all
              duration-300
            "
          >
            View Projects
          </a>

          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="
              px-7
              py-3.5
              border
              border-purple-500/30
              bg-purple-500/10
              rounded-2xl
              hover:bg-purple-500/20
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Download Resume
          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default Hero;