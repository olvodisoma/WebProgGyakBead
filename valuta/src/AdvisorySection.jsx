import React, { useEffect, useRef } from "react";
import "./styles/AdvisorySection.css";

const AdvisorySection = () => {
  const videoRef = useRef();

  useEffect(() => {
    // paint-glitch fix: újrarajzoltatjuk a videót
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.style.display = "none";
        void videoRef.current.offsetHeight; // force reflow
        videoRef.current.style.display = "block";
      }
    }, 100);
  }, []);

  return (
    <div className="advisory-container">
      <div className="advisory-content">
        {/* Bal oldal: szöveg */}
        <div className="advisory-text">
          <h2>Túl sokat fizetsz a bankodnak?</h2>
          <p>
            A hagyományos bankok gyakran alacsony költségekkel vagy ingyenes
            utalásokkal hirdetik magukat, miközben rejtett árfolyamfelárral dolgoznak.
            Ez a láthatatlan költség akár jelentős veszteséget is okozhat számodra.
          </p>
          <p>
            Pénzügyi tanácsadó csapatunk segít, hogy a lehető legjobb árfolyamon válts,
            minimalizáld a költségeidet, és tudatos döntéseket hozz a nemzetközi utalásaid során.
            Vedd fel velünk a kapcsolatot, hogy együtt megtaláljuk a legkedvezőbb megoldást.
          </p>
          <a href="#contact" className="advisory-button">Lépj velünk kapcsolatba</a>
        </div>

        {/* Jobb oldal: videó */}
        <div className="advisory-video">
          <video
            ref={videoRef}
            src="/tanacsadas.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="video-element"
          />
        </div>
      </div>
    </div>
  );
};

export default AdvisorySection;
