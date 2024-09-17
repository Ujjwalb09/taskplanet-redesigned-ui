import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import copy from "../../assets/refer link/copy.png";
import whatsApp from "../../assets/refer link/whatsapp.png";
import facebook from "../../assets/refer link/facebook.png";
import telegram from "../../assets/refer link/telegram.png";
import { motion } from "framer-motion";

const ShareReferLink = () => {
  return (
    <Card className="shadow-md">
      <CardHeader className="p-4">
        <CardTitle className="text-lg">Share Your Refer Link</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 grid grid-cols-4 gap-4">
        {[
          { icon: copy, label: "Copy Link" },
          { icon: whatsApp, label: "WhatsApp" },
          { icon: facebook, label: "Facebook" },
          { icon: telegram, label: "Telegram" },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              key={index}
              variant="outline"
              className="flex flex-col items-center p-2 h-auto hover:bg-gray-200 hover:scale-105 transition-all duration-300"
            >
              <img src={item.icon} alt={item.label} className="h-6 w-6 mb-1" />
              <span className="text-xs font-barlow">{item.label}</span>
            </Button>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};

export default ShareReferLink;
