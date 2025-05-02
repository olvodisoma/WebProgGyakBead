import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "./assets/logo.svg";
import "./styles/Navbar.css";

function Navbar() {
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useGSAP(() => {
    if (!menuRef.current) return;
    const menuItems = menuRef.current.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
      gsap.set(item, { textShadow: "none" });

      const animation = gsap.timeline({ paused: true })
        .to(item, {
          duration: 0.4,
          x: () => Math.random() * 10 - 5,
          y: () => Math.random() * 10 - 5,
          repeat: 3,
          yoyo: true,
          ease: "power1.inOut"
        })
        .to(item, {
          duration: 0.1,
          color: "#ff0000",
          textShadow: "2px 2px rgba(0, 0, 0, 0.75), -2px -2px rgba(0, 255, 255, 0.75)",
          repeat: 3,
          yoyo: true,
          ease: "power1.inOut"
        }, 0);

      item.addEventListener("mouseenter", () => animation.restart());
    });
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="navbar-left">
        <img src={logo} className='logo' alt="Logo" />

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`navbar-menu ${menuOpen ? "visible" : ""}`}>
        <a href="#curencycalculator" className="menu-item">Valutaváltás</a>
        <a href="#currencyexchange" className="menu-item">Valutaárfolyamok</a>
        <a href="#gyik" className="menu-item">GYIK</a>
        <a href="#contact" className="menu-item">Kapcsolat</a>
      </div>
    </nav>
  );
}

export default Navbar;