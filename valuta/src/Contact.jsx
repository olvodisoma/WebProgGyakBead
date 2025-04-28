import { useEffect } from "react";
import gsap from "gsap";
import "./styles/Contact.css";

function Contact() {
  useEffect(() => {
    // Fő konténer belépő animáció
    gsap.from(".contact", { opacity: 0, y: 50, duration: 1, ease: "power2.out" });

    // Szöveg betűnkénti megjelenése
    gsap.from(".im h1", { opacity: 0, y: 20, duration: 1.2, ease: "power2.out", delay: 0.2 });
    gsap.from(".im p", { opacity: 0, y: 20, duration: 1.2, ease: "power2.out", delay: 0.4 });

    // Form mezők animációja egymás után
    gsap.from(".cform input, .cform textarea", {
      opacity: 0,
      x: -50,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
      delay: 0.6
    });

    // Küldés gomb rugós beúszása
    gsap.from(".cbutton", { scale: 0, duration: 1.2, ease: "elastic.out(1, 0.5)", delay: 1 });

    // Hover hatás a gombra
    gsap.to(".cbutton", {
      scale: 1.05,
      duration: 0.2,
      ease: "power1.out",
      paused: true
    });
  }, []);

  return (
    <div className="contact">
      <div className="im">
        <h1>Kérdésed van? Írj nekünk!</h1>
        <p>
          Legyen szó valutaváltásról, árfolyamokról vagy bármi másról, itt vagyunk, hogy segítsünk!
          Töltsd ki az űrlapot, és mi villámgyorsan válaszolunk!
        </p>
      </div>
      <form className="cform">
        <input className="cname" placeholder="Név" />
        <input className="cemail" placeholder="Email" />
        <textarea className="ctextarea" placeholder="Üzenet"></textarea>
        <button className="cbutton">Küldés</button>
      </form>
    </div>
  );
}

export default Contact;
