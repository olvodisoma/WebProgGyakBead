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
      title: "1. Add meg az összeget",
      description: "Írd be, hogy mennyi pénzt szeretnél átváltani – azonnal elkezdjük számolni az aktuális árfolyam alapján.",
      image: "/abstract1.png",
    },
    {
      title: "2. Válaszd ki a valutákat",
      description: "Állítsd be, hogy milyen pénznemből milyenre szeretnél váltani – például HUF → EUR.",
      image: "/abstract2.png",
    },
    {
      title: "3. Nézd meg az eredményt",
      description: "Az alkalmazás automatikusan kiszámolja, mennyit ér az összeged a célvalutában – mindig friss árfolyamon.",
      image: "/abstract3.png",
    },
  ];
  

  return (
    <div className="big-container">
      <h2>Hogyan működik a Valutaváltónk?</h2>
<p>A mi Valutaváltó alkalmazásunkkal egyszerűen kiszámolhatod, hogy egy adott összeg más pénznemekben mennyit érne, a valós piaci középárfolyam alapján.</p>
<p>Csak add meg az átváltani kívánt összeget, válaszd ki a forrás- és célvalutát, és az alkalmazásunk az aktuális piaci árfolyam alapján azonnal kiszámolja az átváltott összeget.</p> 
<p>Fontos tudni, hogy ez az átváltás csak tájékoztató jellegű számítás – az alkalmazás nem végez pénzügyi tranzakciókat vagy utalásokat.</p>  
  <h2>Hogyan használjam a Valutaváltót?</h2>
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
    </div>
  );
};

export default AnimatedTexts;
