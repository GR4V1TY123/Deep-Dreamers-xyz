import React, { useState, useEffect } from "react";

const NikeLoadingPage = () => {
  const [text, setText] = useState("");
  const fullText = "Just Do It.";
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing animation effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 70); // Faster typing speed
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 300); // Faster blinking
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white overflow-hidden">
      {/* Jordan Mascot with Animation */}
      <div className="w-40 h-40 mb-5 animate-bounce">
        <img
          src="/Images/jordan-mascot.png"
          alt="Nike Jordan Mascot"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Typing animation text */}
      <div className="font-bold text-6xl text-black font-sans tracking-wide">
        {text}
        <span
          className={`inline-block w-3 h-16 ml-1 bg-black transition-opacity ${
            showCursor ? "opacity-100" : "opacity-0"
          }`}
        ></span>
      </div>
    </div>
  );
};

export default NikeLoadingPage;
