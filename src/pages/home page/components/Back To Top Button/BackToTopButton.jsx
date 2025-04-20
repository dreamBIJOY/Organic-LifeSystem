import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa"; // আইকনের জন্য

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-6 rounded-3xl bg-green-700 text-white shadow-lg transition-transform duration-300 ${
        showButton ? "scale-100" : "scale-0"
      } hover:bg-green-800`}
      aria-label="Scroll to top"
    >
      <FaArrowUp className="text-[20px]" />
    </button>
  );
};

export default BackToTopButton;
