import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import logo from "./assets/logo.svg";
import "./styles/Navbar.css";

function Navbar() {
    const menuRef = useRef(null);
    
    useGSAP(() => {
        if (!menuRef.current) return; // Ellenőrizzük, hogy a DOM készen áll-e
        
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
            <div className="left">
                <img src={logo} className='logo' alt="Logo" />
            </div>
            <div className="mid">
                <a href="#" className="menu-item">Valutaváltás</a>
                <a href="#" className="menu-item">Valutaárfolyamok</a>
                <a href="#" className="menu-item">GYIK</a>
            </div>
            <div className="right">
                <a href="#" className="menu-item">Kapcsolat</a>
            </div>
        </nav>
    );
}

export default Navbar;