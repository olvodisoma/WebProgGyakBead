import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import "./styles/ComingSoon.css";
import PhoneModel from "./PhoneModel";

const ComingSoon = () => {
  return (
    <div className="totalcontainer">
    <div className="coming-soon-container">
      <div className="model-section">
        <Canvas
          camera={{ position: [0, 0, 3] }}
          gl={{ alpha: true }}
          style={{ background: "transparent" }}
        >
          {/* Általános világos ambient */}
          <ambientLight intensity={3} />

          {/* Körkörös irányított fények */}
          <directionalLight position={[5, 5, 5]} intensity={5} />
          <directionalLight position={[-5, 5, 5]} intensity={5} />
          <directionalLight position={[5, -5, 5]} intensity={5} />
          <directionalLight position={[-5, -5, 5]} intensity={5} />
          <directionalLight position={[0, 5, 5]} intensity={4} />
          <directionalLight position={[0, -5, 5]} intensity={4} />
          <directionalLight position={[5, 0, 5]} intensity={4} />
          <directionalLight position={[-5, 0, 5]} intensity={4} />
          <directionalLight position={[0, -5, -5]} intensity={4} color={"#ffffff"}/>


          {/* Környezeti HDRI */}
          <Environment preset="city" />

          <PhoneModel />

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      <div className="text-section">
        <h1>Hamarosan elérhető!</h1>
        <p>Új mobilalkalmazásunk segítségével egyszerűen és gyorsan válthatod át pénzed több mint 140 különböző pénznem között.</p>
        <p>Valós idejű árfolyamokkal, átlátható kalkulációkkal és könnyen kezelhető felülettel támogatjuk a mindennapi pénzügyi műveleteidet.</p>
        <p>Az alkalmazás biztonságos kapcsolatot, gyors tranzakciókezelést és folyamatos frissítéseket kínál, hogy mindig a legjobb árfolyamokat használhasd.</p>
        <p>Tökéletes megoldás utazóknak, üzletembereknek és mindazoknak, akiknek fontos a gyors és pontos pénzváltás.</p>
      </div>
    </div>
    </div>
  );
};

export default ComingSoon;
