import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { useState } from "react";

const Header = () => {
  const [avatarInfo, setAvatarInfo] = useState(false);
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow sticky top-0 z-50">
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
        <Avatar
          onClick={() => setAvatarInfo(!avatarInfo)}
          className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
        >
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback>
            <img src="/src/assets/avatarImg.png" alt="" />
          </AvatarFallback>
        </Avatar>
      </div>
      {avatarInfo && (
        <div className="absolute top-14 right-0 w-[9rem] h-full bg-gray-300">
          hello
        </div>
      )}
    </header>
  );
};

export default Header;
