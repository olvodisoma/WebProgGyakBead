import React, { useRef} from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./navbar";
import Mainpg from "./mainpg";
import Gyik from "./gyik";
import CurrencyExchange from "./CurrencyExchange";
import CurrencyConverter from "./Curencycalculator";
import "./styles/App.css";
import Contact from "./Contact";
import AnimatedTexts from "./Animatedtext";
function App() {

  const lineRef = useRef(null);

  useGSAP(() => {
    gsap.to(lineRef.current, {
        scaleX: 1.2,   // Pulzáló vastagság
        opacity: 0.5,  // Pulzáló áttetszőség
        transformOrigin: "top center",
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
    });
}, []);


  return (
  <>
   <div ref={lineRef} className="line"></div>
   <Navbar></Navbar>
   <Mainpg></Mainpg>
   <AnimatedTexts></AnimatedTexts>
   <CurrencyExchange></CurrencyExchange>
   <Contact></Contact>
   <CurrencyConverter></CurrencyConverter>
   <Gyik></Gyik>
  </>
  )
}

export default App
