"use client";

import { useState, useEffect } from "react";

const texts = [
  "Full Stack developer",
  "MERN Stack developer",
  "Frontend developer",
  "Backend developer",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < texts[index].length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % texts.length);
      }, 2000); // Delay before changing text
    }
  }, [charIndex, index]);

  return (
    <div>
      {text}
      <span className="animate-blink">|</span>
    </div>
  );
}
