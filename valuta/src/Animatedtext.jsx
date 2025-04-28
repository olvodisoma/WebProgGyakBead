import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./styles/Animatedtext.css";

gsap.registerPlugin(ScrollTrigger);

const AnimatedTexts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".card-content");

    // Belépési animáció egyszeri
    gsap.set(cards, { opacity: 0, y: 50, scale: 0.9 });

    gsap.to(cards, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power4.out",
      stagger: 0.2,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
        once: true, // csak egyszer fusson le!
      },
    });
  }, []);

  const cards = [
    {
      title: "Valós idejű árfolyamok",
      description: "Mindig a legfrissebb piaci adatokat használjuk a pontos váltáshoz.",
      image: "/abstract1.png",
    },
    {
      title: "Gyors tranzakciók",
      description: "Pénzed néhány másodperc alatt elérhető lesz a kiválasztott valutában.",
      image: "/abstract2.png",
    },
    {
      title: "Biztonságos váltás",
      description: "Modern biztonsági megoldásokkal védjük adataidat és tranzakcióidat.",
      image: "/abstract3.png",
    },
  ];

  return (
    <div ref={containerRef} className="cards-container">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className="info-card"
          style={{ backgroundImage: `url(${card.image})` }}
        >
          <div className="card-content">
            <h3 className="card-title">{card.title}</h3>
            <p className="card-description">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnimatedTexts;
