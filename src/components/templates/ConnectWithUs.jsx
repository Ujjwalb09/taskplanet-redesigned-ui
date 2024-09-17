import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import instagram from "../../assets/social/instagram.png";
import facebook from "../../assets/social/facebook.png";
import x from "../../assets/social/twitter.png";
import youtube from "../../assets/social/youtube.png";
import telegram from "../../assets/social/telegram.png";
import linkedin from "../../assets/social/linkedin.png";

const socialIcons = [
  { icon: linkedin, label: "LinkedIn" },

  { icon: facebook, label: "Facebook" },
  { icon: x, label: "X", color: "bg-black" },
  { icon: youtube, label: "Youtube" },
  { icon: telegram, label: "Telegram" },
  { icon: instagram, label: "Instagram" },
];

const ConnectWithUs = () => {
  return (
    <Card className="bg-gradient-to-r from-[#E5CCC3] to-[#6047DF]">
      <CardHeader className="p-3 flex items-center">
        <CardTitle className="text-lg font-poppins">Connect With Us</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex justify-between">
        {socialIcons.map((Icon, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="rounded-full hover:scale-105"
          >
            <img src={Icon.icon} className="h-8 w-8" />
          </Button>
        ))}
      </CardContent>
    </Card>
  );
};

export default ConnectWithUs;
