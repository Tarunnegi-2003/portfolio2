import "../index.css";
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      
      {/* Floating Icons */}
      <FaReact className="float react" />
      <FaHtml5 className="float html" />
      <FaCss3Alt className="float css" />
      <FaJs className="float js" />

      <h1 className="slide">
        Hi, I’m <span className="type">Tarun Negi</span>
      </h1>

      <p className="fade">
        Frontend Developer | React | CSS
      </p>

      <div className="hero-btns">
        <a className="btn" href="#projects">View Projects</a>
        <a
          className="btn outline"
          href="/public/Tarun_negi_resume.pdf"
          target="_blank"
        >
          Resume
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll">↓</div>

    </section>
  );
}
