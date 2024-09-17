import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/banner2/1.png";
import img2 from "../../assets/banner2/2.png";
import img3 from "../../assets/banner2/3.png";

const AnimatedReferCard = () => {
  const referCardImages = [
    {
      src: img1,
      alt: "Refer and Earn",
    },
    {
      src: img2,
      alt: "Premium membership",
    },
    {
      src: img3,
      alt: "Social media task",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % referCardImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full h-[11.5rem] rounded-xl">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <img
            src={referCardImages[currentIndex].src}
            alt={referCardImages[currentIndex].alt}
            layout="cover"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {referCardImages.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-400" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimatedReferCard;
