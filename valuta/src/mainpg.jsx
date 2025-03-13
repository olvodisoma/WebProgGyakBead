import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import "./styles/mainpg.css";
import Main3d from "./main3d.jsx";

function Mainpg() {
    const textRef = useRef(null);
    const texts = ["Gyors és egyszerű használat", "Valós idejű árfolyamok", "Pontos valuta összehasonlítás"];
    const [textIndex, setTextIndex] = useState(0);
    
    useEffect(() => {
        let i = 0;
        let interval;

        if (textRef.current) {
            textRef.current.innerText = ""; // Ürítsük ki a régi szöveget
        }

        const typeText = () => {
            interval = setInterval(() => {
                if (i < texts[textIndex].length) {
                    if (textRef.current) textRef.current.innerText = texts[textIndex].slice(0, i + 1);
                    i++;
                } else {
                    clearInterval(interval);
                    setTimeout(() => {
                        gsap.to(textRef.current, {
                            opacity: 0,
                            duration: 0.5,
                            onComplete: () => {
                                setTimeout(() => {
                                    setTextIndex((prevIndex) => (prevIndex + 1) % texts.length); // Következő szöveg kiválasztása
                                    gsap.set(textRef.current, { opacity: 1 });
                                }, 200);
                            }
                        });
                    }, 3000); // 3 másodpercig marad látható
                }
            }, 100);
        };

        typeText();

        return () => clearInterval(interval); // Biztosítjuk, hogy ne legyenek felesleges intervallumok

    }, [textIndex]); // Figyeli az állapotváltozást, így újraindul minden frissítéskor

    return (
        <section>
            <div className="leftdiv">
                <h2>Pénzed határok nélkül Villámgyors valutaváltás a legjobb árfolyamokkal</h2>
                <h1 ref={textRef}></h1>
            </div>
            <div className="rightdiv">
                <Canvas shadows camera={{ position: [0, 0, 3] }}>
                    <ambientLight intensity={5.6} />
                    <directionalLight position={[3, 3, 3]} intensity={5.0} castShadow />
                    <directionalLight position={[-3, -3, 3]} intensity={4.8} castShadow />
                    <pointLight position={[1, 1, 3]} intensity={7.8} />
                    <spotLight position={[0, -2, -5]} angle={5.5} intensity={5.8} castShadow />
                    <Main3d />
                </Canvas>
            </div>
        </section>
    );
}

export default Mainpg;
