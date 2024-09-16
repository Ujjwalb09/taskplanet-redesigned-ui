import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedReferCard = () => {
  const referCardImages = [
    {
      src: "https://res.cloudinary.com/green-valley-grocery/image/upload/v1718298663/answer_img/yssezekxomsupx3idjbg.png",
      alt: "Refer and Earn",
    },
    {
      src: "https://res.cloudinary.com/green-valley-grocery/image/upload/v1718298712/answer_img/qajogndhzd01sc5uihyp.png",
      alt: "Premium membership",
    },
    {
      src: "https://res.cloudinary.com/green-valley-grocery/image/upload/v1724410236/answer_img/nc9qgz7yp6tnddwnvd3w.png",
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
