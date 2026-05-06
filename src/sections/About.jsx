import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
          I'm a Computer Science student at IIIT Dharwad passionate about
          full-stack development, scalable backend systems, and real-time
          web applications.

          I enjoy building modern web experiences using the MERN stack and
          solving complex Data Structures & Algorithms problems.

          I have worked on projects including real-time chat applications,
          social media platforms, and backend file upload systems.
        </p>

      </motion.div>
    </section>
  );
};

export default About;