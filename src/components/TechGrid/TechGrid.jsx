import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaBootstrap } from "react-icons/fa";
import { MdWeb, MdStorage } from "react-icons/md";
import { FaFigma } from "react-icons/fa";
import { SiRedux } from "react-icons/si"; // Import de Redux
import './techgrid.scss';

const technologies = [
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-6xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
  { name: "React", icon: <FaReact className="text-blue-400 text-6xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-6xl" /> }, // Ajout de Redux
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
  { name: "Sass", icon: <FaSass className="text-pink-400 text-6xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-red-500 text-6xl" /> },
  { name: "MongoDB", icon: <MdStorage className="text-green-600 text-6xl" /> },
  { name: "Figma", icon: <FaFigma className="text-orange-500 text-6xl" /> },
  { name: "Next.js", icon: <MdWeb className="text-black text-6xl" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600 text-6xl" /> },
];

const TechGrid = () => {
  return (
    <div className="tech-container">
         <h2>Compétences Professionnelles
         </h2>
      <div className="tech-grid">
     
        {technologies.map((tech, index) => (
          <div key={index} className="tech-card">
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechGrid;
