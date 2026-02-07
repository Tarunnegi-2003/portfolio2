// import "../index.css";


// export default function Navbar() {
// return (
// <nav className="navbar">
// <h2 className="logo">Tarun.dev</h2>
// <ul>
// <li><a href="#home">Home</a></li>
// <li><a href="#about">About</a></li>
// <li><a href="#skills">Skills</a></li>
// <li><a href="#projects">Projects</a></li>
// <li><a href="#contact">Contact</a></li>
// </ul>
// </nav>
// );
// }


// import { useState } from "react";
// import "../index.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <h2 className="logo">Tarun.dev</h2>

//       <ul className={open ? "nav-links active" : "nav-links"}>
//         <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
//         <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
//         <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
//         <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
//         <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
//       </ul>

//       {/* Hamburger */}
//       <div className="hamburger" onClick={() => setOpen(!open)}>
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// }

// import { useState } from "react";
// import "../index.css";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState("home");

//   const handleClick = (id) => {
//     setActive(id);
//     setOpen(false);
//   };

//   return (
//     <nav className="navbar glass">
//     <h2 className="logo gradient-logo">Tarun negi</h2>



//       <ul className={open ? "nav-links active" : "nav-links"}>
//         <li>
//           <a
//             href="#home"
//             className={active === "home" ? "active-link" : ""}
//             onClick={() => handleClick("home")}
//           >
//             Home
//           </a>
//         </li>
//         <li>
//           <a
//             href="#about"
//             className={active === "about" ? "active-link" : ""}
//             onClick={() => handleClick("about")}
//           >
//             About
//           </a>
//         </li>
//         <li>
//           <a
//             href="#skills"
//             className={active === "skills" ? "active-link" : ""}
//             onClick={() => handleClick("skills")}
//           >
//             Skills
//           </a>
//         </li>
//         <li>
//           <a
//             href="#projects"
//             className={active === "projects" ? "active-link" : ""}
//             onClick={() => handleClick("projects")}
//           >
//             Projects
//           </a>
//         </li>
//         <li>
//           <a
//             href="#contact"
//             className={active === "contact" ? "active-link" : ""}
//             onClick={() => handleClick("contact")}
//           >
//             Contact
//           </a>
//         </li>
//       </ul>

//       {/*  Hamburger */}
//       <div
//         className={open ? "hamburger open" : "hamburger"}
//         onClick={() => setOpen(!open)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// }
// import { useEffect, useState } from "react";
// import "../index.css";

// export default function Navbar({ theme, toggleTheme }) {
//   const [active, setActive] = useState("home");

//   useEffect(() => {
//     const sections = document.querySelectorAll("section");

//     const onScroll = () => {
//       let current = "";
//       sections.forEach((sec) => {
//         const top = sec.offsetTop - 120;
//         if (window.scrollY >= top) {
//           current = sec.getAttribute("id");
//         }
//       });
//       setActive(current);
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav className="navbar glass">
//       <h2 className="logo">Tarun</h2>

//       <ul className="nav-links">
//         {["home", "about", "skills", "projects", "contact"].map((item) => (
//           <li key={item}>
//             <a
//               href={`#${item}`}
//               className={active === item ? "active" : ""}
//             >
//               {item.charAt(0).toUpperCase() + item.slice(1)}
//             </a>
//           </li>
//         ))}
//       </ul>

    
//     </nav>
//   );
// }

import { useEffect, useState } from "react";
import "../index.css";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const onScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
          current = sec.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="navbar glass">
      <h2 className="logo">Tarun</h2>

      {/* 🍔 Hamburger (sirf mobile) */}
      <div
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${open ? "show" : ""}`}>
        {["home", "about", "skills", "projects", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className={active === item ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
