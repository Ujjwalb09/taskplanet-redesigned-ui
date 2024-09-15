import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedLeaderboard = () => {
  const leaderboardImages = [
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2-qiabER8Hbmf7vJao2fB9vS56a5s4gw.png",
      alt: "Welcome to TaskPlanet",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-3kCOcxC64JMuYOJ2hyb1lXwk10NpoD.png",
      alt: "Daily Leaderboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3-6APNvMPdqBNCpAJ8QPD1gb7KHjQv8E.png",
      alt: "Weekly Leaderboard",
    },
    {
      src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4-hwhmae29j3sE6Ms43UbcbKLZKxWdUD.png",
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
