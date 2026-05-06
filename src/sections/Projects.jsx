import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "Real-Time Chat Application",
    desc: "MERN + Socket.io based real-time chat app with authentication, online users, live messaging, and responsive UI.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/UditDadhich",
  },

  {
    title: "Backend File Upload System",
    desc: "Scalable backend service using Multer and Cloudinary for secure media uploads and optimized delivery.",
    tech: ["Express.js", "MongoDB", "Cloudinary"],
    github: "https://github.com/UditDadhich",
  },

  {
    title: "Social Media Web App",
    desc: "Full-stack social media platform with dynamic UI, post interactions, and persistent storage.",
    tech: ["React.js", "MongoDB", "Express"],
    github: "https://github.com/UditDadhich",
  },

  {
    title: "Startup Website (Mlera UI)",
    desc: "Modern startup landing page built using Next.js with responsive design and clean frontend architecture.",
    tech: ["Next.js", "TailwindCSS"],
    github: "https://github.com/UditDadhich",
  },

  {
    title: "Todo Application",
    desc: "Task management application with add, update, and delete functionality using modern JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/UditDadhich",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-28 px-6 max-w-7xl mx-auto relative"
    >
      {/* Section Glow */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
         <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            scale={1.02}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            key={index}
          >

            {/* Hover Glow */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-r
                from-purple-500/0
                via-purple-500/5
                to-blue-500/0
                opacity-0
                group-hover:opacity-100
                transition
                duration-700
              " />

              {/* Content */}
              <div className="relative z-10">

                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        px-4
                        py-1.5
                        rounded-full
                        bg-white/10
                        text-sm
                        border
                        border-white/10
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-4">

                  <a
                    href={project.github}
                    target="_blank"
                    className="
                      px-5
                      py-2.5
                      rounded-xl
                      bg-white
                      text-black
                      font-medium
                      hover:scale-105
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href="#"
                    className="
                      px-5
                      py-2.5
                      rounded-xl
                      border
                      border-white/20
                      hover:bg-white/10
                      transition
                    "
                  >
                    Live Demo
                  </a>

                </div>

              </div>

          </Tilt>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;