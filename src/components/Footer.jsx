import React from "react";
import { Button } from "@/components/ui/button";
import home from "../assets/footer/home-button.png";
import tasks from "../assets/footer/tasks.png";
import create from "../assets/footer/create.png";
import manageTasks from "../assets/footer/manageTask.png";
import leaderBoard from "../assets/footer/leaderboard.png";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="bg-[#F6F5F2] border-t border-gray-200 shadow-md sticky bottom-0 z-50 rounded-xl"
      style={{
        boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div className="px-2 py-3">
        <TooltipProvider>
          <nav className="flex justify-between items-center relative">
            <FooterButton icon={home} label="Home" />
            <FooterButton icon={tasks} label="Tasks" />
            <FooterButton icon={create} label="Create" />
            <FooterButton icon={manageTasks} label="Manage Task" />
            <FooterButton icon={leaderBoard} label="Leaderboard" />
          </nav>
        </TooltipProvider>
      </div>
    </footer>
  );
};

const FooterButton = ({ icon, label }) => (
  <Tooltip delayDuration={0}>
    <TooltipTrigger asChild>
      {label !== "Home" ? (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="ghost"
            className="flex flex-col items-center justify-center hover:bg-gray-100"
          >
            <img src={icon} alt={label} className="h-9 w-9 mb-1" />
          </Button>
        </motion.div>
      ) : (
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="/"
            variant="ghost"
            className="flex flex-col items-center justify-center hover:bg-gray-100"
          >
            <img src={icon} alt={label} className="h-9 w-9 mb-1" />
          </Link>
        </motion.div>
      )}
    </TooltipTrigger>
    <TooltipContent className="bg-white text-black text-sm">
      <p>{label}</p>
    </TooltipContent>
  </Tooltip>
);

export default Footer;
