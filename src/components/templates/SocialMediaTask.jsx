import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import instagram from "../../assets/social/instagram.png";
import facebook from "../../assets/social/facebook.png";
import x from "../../assets/social/twitter.png";
import youtube from "../../assets/social/youtube.png";
import telegram from "../../assets/social/telegram.png";
import linkedin from "../../assets/social/linkedin.png";
import { motion } from "framer-motion";

const socialMediaContent = [
  { icon: instagram, label: "Instagram" },
  { icon: facebook, label: "Facebook" },
  { icon: x, label: "X", color: "bg-black" },
  { icon: youtube, label: "Youtube" },
  { icon: telegram, label: "Telegram" },
  { icon: linkedin, label: "LinkedIn" },
];

const SocialMediaTask = () => {
  return (
    <Card className="overflow-hidden shadow-lg">
      <CardHeader className="bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4">
        <CardTitle className="text-lg font-bold text-white flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 mr-2"
          >
            <path
              fillRule="evenodd"
              d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 3.205 6.66 6.66 0 01.351 5.445A12.842 12.842 0 0112 22.5c-2.842 0-5.47-.926-7.6-2.495a6.66 6.66 0 01.351-5.445A6.745 6.745 0 016.31 15.117z"
              clipRule="evenodd"
            />
          </svg>
          Social Media Tasks
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 bg-gradient-to-b from-gray-100 to-white">
        <div className="grid grid-cols-3 gap-3">
          {socialMediaContent.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="w-full h-full flex flex-col items-center justify-center p-2 space-y-2 rounded-lg border-2 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className={`p-0 rounded-full`}>
                  <img src={item.icon} alt={item.label} className="h-8 w-8" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-xs font-semibold text-green-600 bg-green-100 px-2 py-1 rounded-full flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-3 h-3 mr-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  +5 points
                </span>
              </Button>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SocialMediaTask;
