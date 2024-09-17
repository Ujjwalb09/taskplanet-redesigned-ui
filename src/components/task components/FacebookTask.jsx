import React from "react";
import { Heart, MessageCircle, UserPlus } from "lucide-react";
import TaskCard from "./templates/TaskCard";

const FacebookTask = () => {
  const tasks = [
    {
      title: "FACEBOOK POST LIKE",
      description: "Like Any Facebook Post &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-gradient-to-r from-blue-600 to-green-400",
      icon: <Heart className="w-12 h-12 text-white" />,
      image: "https://contentstatic.techgig.com/photo/70994460.cms",
      points: 10,
    },
    {
      title: "FACEBOOK POST COMMENT",
      description: "Comment on Any Facebook Post &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-gradient-to-l from-blue-300 to-indigo-600",
      icon: <MessageCircle className="w-12 h-12 text-white" />,
      image:
        "https://img.freepik.com/premium-vector/follow-us-facebook-3d-speech-bubble-with-render-facebook-icon-logo-join-us-social-media-icons_248162-1462.jpg",
      points: 15,
    },
    {
      title: "FACEBOOK PROFILE FOLLOW",
      description: "Follow Any Profile on Facebook! &",
      subDescription: "Earn Exciting Rewards",
      color: "bg-gradient-to-l from-yellow-500 to-orange-600",
      icon: <UserPlus className="w-12 h-12 text-white" />,
      image:
        "https://img.freepik.com/premium-vector/follow-us-facebook-3d-speech-bubble-with-render-facebook-icon-logo-join-us-social-media-icons_248162-1462.jpg",
      points: 20,
    },
  ];
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Facebook Task</h2>

      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default FacebookTask;
