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
import ComingSoon from "./ComingSoon";
import AdvisorySection from "./AdvisorySection";
function App() {
  return (
  <>
   <Navbar></Navbar>
   <Mainpg></Mainpg>
   <CurrencyConverter></CurrencyConverter>
   <AnimatedTexts></AnimatedTexts>
   <CurrencyExchange></CurrencyExchange>
   <ComingSoon></ComingSoon>
   <AdvisorySection></AdvisorySection>
   <Contact></Contact>
   <Gyik></Gyik>
  </>
  )
}

export default App
