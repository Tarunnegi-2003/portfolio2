import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaMobileAlt,
  FaPaintBrush
} from "react-icons/fa";
import "../index.css";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>

      <div className="grid">
        <div className="card"><FaHtml5 /> HTML</div>
        <div className="card"><FaCss3Alt /> CSS</div>
        <div className="card"><FaJs /> JavaScript</div>
        <div className="card"><FaReact /> React</div>

        {/* NEW SKILLS */}
        <div className="card"><FaGitAlt /> Git & GitHub</div>
        <div className="card"><FaMobileAlt /> Responsive Design</div>
        <div className="card"><FaPaintBrush /> UI / UX Basics</div>
      </div>
    </section>
  );
}
