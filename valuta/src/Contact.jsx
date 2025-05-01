import React, { useEffect, useRef, useMemo } from "react";
import "./styles/Contact.css";
import gsap from "gsap";

const currencySymbols = ['$', '€', '£', '¥', '₿'];

const getRandomSymbol = () =>
  currencySymbols[Math.floor(Math.random() * currencySymbols.length)];

const Contact = () => {
  const bgRef = useRef(null);

  // Memorizált szimbólumok újratöltésnél
  const centerSymbol = useMemo(() => getRandomSymbol(), []);
  const floatingSymbols = useMemo(
    () =>
      Array.from({ length: 12 }, () => ({
        symbol: getRandomSymbol(),
        top: 10 + Math.random() * 80,
        left: 10 + Math.random() * 80,
      })),
    []
  );

  useEffect(() => {
    const symbols = bgRef.current.querySelectorAll(".floating");

    symbols.forEach((el, i) => {
      gsap.to(el, {
        x: "+=" + (Math.random() * 50 - 25),
        y: "+=" + (Math.random() * 50 - 25),
        rotation: "+=" + (Math.random() * 20 - 10),
        opacity: 0.2 + Math.random() * 0.2,
        duration: 4 + Math.random() * 2, // gyorsabb és folyamatos
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  return (
    <div className="contact-full-width">
      <div className="contact-intro">
        <h2>Készen állsz a váltásra?</h2>
        <p>
        Szükséged van megbízható árfolyaminformációkra, automatikus váltásra vagy egyszerűen csak tanácsra?
        </p>
        <p>
        Cégünk azért dolgozik, hogy a pénzügyi mozgásaid egyszerűbbé és átláthatóbbá váljanak – legyen szó magánszemélyként történő valutaváltásról, céges együttműködésről, vagy technikai támogatásról.
        Töltsd ki az alábbi kapcsolatfelvételi űrlapot, és csapatunk rövid időn belül válaszol – mert számunkra az átváltás nemcsak számok kérdése, hanem bizalomé is.
        </p>
      </div>

      <div className="contact-limited">
        <form className="contact-form">
          <h1>Kapcsolat</h1>
          <input type="text" placeholder="Neved" required />
          <input type="email" placeholder="Email címed" required />
          <textarea placeholder="Üzeneted..." rows="4" required />
          <button type="submit">Küldés</button>
        </form>

        <div className="contact-animation" ref={bgRef}>
          <div className="center-icon">{centerSymbol}</div>
          {floatingSymbols.map((item, i) => (
            <div
              key={i}
              className="floating"
              style={{
                top: `${item.top}%`,
                left: `${item.left}%`,
              }}
            >
              {item.symbol}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
