import "../index.css";
import profile from "../assets/tarun.jpg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-card">

        <div className="about-img">
          <img src={profile} alt="Tarun Negi" />
        </div>

        <h2 className="about-title">About Me</h2>

        <p className="about-text">
          I’m <span className="highlight">Tarun Negi</span>, a passionate
          <span className="highlight"> Frontend Developer</span> who builds
          modern, responsive and animated user interfaces.
        </p>

        <p className="about-text">
          Skilled in React, JavaScript and CSS with a focus on clean UI and UX.
        </p>

      </div>
    </section>
  );
}
