import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <h1 className="text-xl font-bold">Home</h1>
      <div className="flex items-center justify-center space-x-2">
        <span className="flex items-center bg-purple-100 text-purple-800 rounded-full px-2 py-1 text-sm">
          <span className="mr-1">🎁</span>13
        </span>
        <span className="bg-green-100 text-green-800 rounded-full px-2 py-1 text-sm">
          ₹0.00
        </span>
        <span className="bg-gray-100 text-gray-800 rounded-full px-2 py-1 text-sm">
          ₹1000
        </span>
        <Avatar className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>
            <img src="/src/assets/avatarImg.png" alt="" />
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;
