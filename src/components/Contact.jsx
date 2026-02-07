import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub, FaPhoneAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>

      <p className="contact-sub">
        Feel free to reach out — I’m always open to opportunities 🙂
      </p>

      <div className="contact-row">
        <a href="mailto:negit526@gmail.com" className="contact-item">
          <MdEmail />
          <span>Email</span>
        </a>

        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          className="contact-item"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Tarunnegi-2003"
          target="_blank"
          className="contact-item"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a href="tel:+916395745408" className="contact-item">
          <FaPhoneAlt />
          <span>Call</span>
        </a>
      </div>
    </section>
  );
}


