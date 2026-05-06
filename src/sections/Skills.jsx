import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiCloudinary,
  SiLinux,
  SiSocketdotio,
  SiMysql,
} from "react-icons/si";

const skills = [
  { name: "Java", icon: <FaJava size={50} /> },
  { name: "Python", icon: <FaPython size={50} /> },
  { name: "JavaScript", icon: <SiJavascript size={50} /> },
  { name: "React.js", icon: <FaReact size={50} /> },
  { name: "Next.js", icon: <SiNextdotjs size={50} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={50} /> },
  { name: "Node.js", icon: <FaNodeJs size={50} /> },
  { name: "Express.js", icon: <SiExpress size={50} /> },
  { name: "MongoDB", icon: <SiMongodb size={50} /> },
  { name: "Redux", icon: <SiRedux size={50} /> },
  { name: "Git", icon: <FaGitAlt size={50} /> },
  { name: "GitHub", icon: <FaGithub size={50} /> },
  { name: "Cloudinary", icon: <SiCloudinary size={50} /> },
  { name: "Linux", icon: <SiLinux size={50} /> },
  { name: "WebSockets", icon: <SiSocketdotio size={50} /> },
  { name: "MySQL", icon: <SiMysql size={50} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 max-w-7xl mx-auto relative">
      {/* Glow */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-16">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="flip-card">
              <div className="flip-card-inner">
                {/* FRONT */}
                <div className="flip-card-front">
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>

                {/* BACK */}
                <div className="flip-card-back">
                  <div className="skill-icon">{skill.icon}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
