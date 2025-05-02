import { useRef, useState } from "react";
import { gsap } from "gsap";
import "./styles/gyik.css"; 

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const answerRef = useRef(null);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      gsap.to(answerRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
    }
  };

  return (
    <div className="faq-item">
      <button className="faq-question" onClick={toggleFAQ}>
        {question}
        <span className={`faq-icon ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      <div ref={answerRef} className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
};

const Gyik = () => {
  const faqs = [
    { question: "A kalkulátor figyelembe veszi a banki díjakat vagy egyéb költségeket?", answer: "Nem, a valuta kalkulátor csak a középárfolyamot használja. A bankok, pénzváltók vagy online fizetési szolgáltatók eltérő árfolyamokat és tranzakciós díjakat alkalmazhatnak." },
    { question: "Az árfolyamok valós idejűek?", answer: "Igen, folyamatosan frissítjük az adatokat." },
    { question: "Miért különböznek a pénzváltók és a bankok árfolyamai?", answer: "A bankok és pénzváltók saját árfolyamokat határoznak meg, amelyek tartalmazhatják a szolgáltatási díjakat és egyéb költségeket. A kalkulátorunk a középárfolyamot mutatja, amely a pénzpiacon elérhető középérték." },
    { question: "Van mobilalkalmazása a valuta kalkulátornak?", answer: "Jelenleg az oldalunk mobilbarát verzióban is elérhető, így bármilyen eszközről könnyen használhatod. A natív mobilalkalmazás fejlesztése folyamatban van." },
    { question: "Mennyire pontos a kalkulátor által megadott összeg?", answer: "A valuta kalkulátor pontos, mert a legfrissebb árfolyamadatokat használja. Azonban a tényleges váltási összeg eltérhet attól függően, hogy hol és milyen szolgáltatónál végzed az átváltást." }
];

  return (
    <div className="faq-container" id="gyik">
      <h2 className="faq-title">GYIK</h2>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Gyik;
