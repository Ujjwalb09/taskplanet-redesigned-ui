import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img1 from "../../assets/banner1/1.png";
import img2 from "../../assets/banner1/2.png";
import img3 from "../../assets/banner1/3.png";
import img4 from "../../assets/banner1/4.png";

const AnimatedLeaderboard = () => {
  const leaderboardImages = [
    {
      src: img1,
      alt: "Welcome to TaskPlanet",
    },
    {
      src: img2,
      alt: "Daily Leaderboard",
    },
    {
      src: img3,
      alt: "Weekly Leaderboard",
    },
    {
      src: img4,
      alt: "Monthly Leaderboard",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % leaderboardImages.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full h-[11.5rem] overflow-hidden rounded-xl">
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
            src={leaderboardImages[currentIndex].src}
            alt={leaderboardImages[currentIndex].alt}
            layout="cover"
            objectFit="cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {leaderboardImages.map((_, index) => (
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

export default AnimatedLeaderboard;
