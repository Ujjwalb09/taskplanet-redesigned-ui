import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React, { useEffect, useRef, useState } from "react";
import profile from "../assets/avatarInfo/profile.png";
import sponsor from "../assets/avatarInfo/sponsor.png";
import call from "../assets/avatarInfo/phone.png";
import whatsapp from "../assets/avatarInfo/whatsapp.png";
import leaderboard from "../assets/avatarInfo/leaderboard.png";
import taskHistory from "../assets/avatarInfo/task-history.png";
import settings from "../assets/avatarInfo/settings.png";
import logout from "../assets/avatarInfo/logout.png";
const Header = () => {
  const [avatarInfo, setAvatarInfo] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        avatarInfoRef.current &&
        avatarRef.current &&
        !avatarInfoRef.current.contains(e.target) &&
        !avatarRef.current.contains(e.target)
      ) {
        setAvatarInfo(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const avatarInfoRef = useRef(null);
  const avatarRef = useRef(null);
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
          ref={avatarRef}
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
        <div
          ref={avatarInfoRef}
          className="absolute top-[4rem] right-0 w-[12rem] h-[19.5rem] bg-[#F6F5F2] border border-gray-300 flex flex-col rounded-md cursor-pointer"
        >
          {/* my profile */}
          <div className="flex justify-between items-center p-2  hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={profile} alt="" className="h-4 w-4 mb-[2px]" />
              <p>My Profile</p>
            </div>
            <p className="text-[10px] bg-red-400 rounded-md px-2 py-1 text-white">
              Inactive
            </p>
          </div>
          <hr className="border-gray-200" />

          {/* sponsor */}
          <div className="flex flex-col p-2 hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={sponsor} alt="" className="h-4 w-4 mb-[2px]" />
              <p>Taskplanet</p>
            </div>
            <p className="text-[10px] ml-7">sponsor</p>
          </div>
          <hr className="border-gray-200" />

          {/* call */}
          <div className="flex flex-col p-2 hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={call} alt="" className="h-4 w-4 mb-[2px]" />
              <p>+916307182501</p>
            </div>
          </div>
          <hr className="border-gray-200" />

          {/* whatsapp */}
          <div className="flex flex-col p-2 hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={whatsapp} alt="" className="h-4 w-4 mb-[2px]" />
              <p>+916307182501</p>
            </div>
          </div>
          <hr className="border-gray-200" />

          {/* leaderboard */}
          <div className="flex flex-col p-2 hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={leaderboard} alt="" className="h-4 w-4 mb-[2px]" />
              <p>Leader Board</p>
            </div>
          </div>
          <hr className="border-gray-200" />

          {/* task history */}
          <div className="flex flex-col p-2 hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={taskHistory} alt="" className="h-4 w-4 mb-[2px]" />
              <p>All Task History</p>
            </div>
          </div>
          <hr className="border-gray-200" />

          {/* settings */}
          <div className="flex flex-col p-2 hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={settings} alt="" className="h-4 w-4 mb-[2px]" />
              <p>Settings</p>
            </div>
          </div>
          <hr className="border-gray-200" />

          {/* logout */}
          <div className="flex flex-col p-2 hover:bg-gray-200">
            <div className="text-sm flex items-center gap-2">
              <img src={logout} alt="" className="h-4 w-4 mb-[2px]" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
