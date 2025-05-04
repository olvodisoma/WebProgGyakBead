import React, { useEffect, useRef, useMemo, useState } from "react";
import "./styles/Contact.css";
import gsap from "gsap";
import emailjs from "@emailjs/browser";

const currencySymbols = ['$', '€', '£', '¥', '₿'];

const getRandomSymbol = () =>
  currencySymbols[Math.floor(Math.random() * currencySymbols.length)];

const Contact = () => {
  const bgRef = useRef(null);
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

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
        duration: 4 + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  const validate = () => {
    const newErrors = {};
    if (formData.name.trim().length < 2) newErrors.name = "Add meg a neved!";
    if (!formData.email.includes("@")) newErrors.email = "Érvényes email cím szükséges!";
    if (formData.phone.trim().length < 8 || !/^[0-9+\- ()]+$/.test(formData.phone))
      newErrors.phone = "Adj meg érvényes telefonszámot!";
    if (formData.subject.trim().length < 4) newErrors.subject = "A tárgy legyen legalább 4 karakter!";
    if (formData.message.trim().length < 10) newErrors.message = "Az üzenet legyen legalább 10 karakter!";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setStatus("");

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .send(
          "service_3b00yb9",
          "template_lapai3g",
          formData,
          "94a0blo2fH2bjnZEF"
        )
        .then(
          () => {
            setStatus("Sikeresen elküldve!");
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
          },
          () => {
            setStatus("Hiba történt. Próbáld újra.");
          }
        );
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="contact-full-width">
      <div className="contact-intro">
        <h1>Készen állsz a váltásra?</h1>
        <p>
          Szükséged van megbízható árfolyaminformációkra, automatikus váltásra vagy egyszerűen csak tanácsra?
        </p>
        <p>
          Cégünk azért dolgozik, hogy a pénzügyi mozgásaid egyszerűbbé és átláthatóbbá váljanak – legyen szó magánszemélyként történő valutaváltásról, céges együttműködésről, vagy technikai támogatásról.
          Töltsd ki az alábbi kapcsolatfelvételi űrlapot, és csapatunk rövid időn belül válaszol – mert számunkra az átváltás nemcsak számok kérdése, hanem bizalomé is.
        </p>
      </div>

      <div className="contact-limited" id="contact">
        <form className="contact-form" onSubmit={handleSubmit} ref={formRef}>
          <h1>Kapcsolat</h1>

          <label htmlFor="name">Neved</label>
          <input
            type="text"
            id="name"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <label htmlFor="email">Email címed</label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="phone">Telefonszámod</label>
          <input
            type="text"
            id="phone"
            name="phone"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error">{errors.phone}</p>}

          <label htmlFor="subject">Tárgy</label>
          <input
            type="text"
            id="subject"
            name="subject"
            autoComplete="off"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          {errors.subject && <p className="error">{errors.subject}</p>}

          <label htmlFor="message">Üzeneted</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            autoComplete="off"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Küldés</button>
          {status && <p className="status">{status}</p>}
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
