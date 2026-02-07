import "../index.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title">Projects</h2>

      <div className="projects-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Portfolio Website</h3>
          <p>
            Personal portfolio built using React and CSS with animations and
            responsive design.
          </p>

          <div className="project-links">
            <a href="https://example.com" target="_blank">
              <FaExternalLinkAlt /> Live
            </a>
            <a href="https://github.com/" target="_blank">
              <FaGithub /> Code
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>E-Commerce UI</h3>
          <p>
            Modern shopping UI with product cards, cart layout and clean UX.
          </p>

          <div className="project-links">
            <a href="https://example.com" target="_blank">
              <FaExternalLinkAlt /> Live
            </a>
            <a href="https://github.com/" target="_blank">
              <FaGithub /> Code
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <h3>Weather App</h3>
          <p>
            Weather app using API with dynamic UI and responsive layout.
          </p>

          <div className="project-links">
            <a href="https://example.com" target="_blank">
              <FaExternalLinkAlt /> Live
            </a>
            <a href="https://github.com/" target="_blank">
              <FaGithub /> Code
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
