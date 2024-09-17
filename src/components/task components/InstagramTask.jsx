import React from "react";
import { Heart, MessageCircle, UserPlus } from "lucide-react";
import TaskCard from "./templates/TaskCard";

const InstagramTask = () => {
  const tasks = [
    {
      title: "INSTAGRAM POST LIKE",
      description: "Like Any Instagram Post &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-gradient-to-r from-pink-500 to-rose-500",
      icon: <Heart className="w-12 h-12 text-white" />,
      image:
        "https://53.fs1.hubspotusercontent-na1.net/hubfs/53/How%20To%20Post%20on%20IG.jpg",
      points: 10,
    },
    {
      title: "INSTAGRAM POST COMMENT",
      description: "Comment on Any Instagram Post &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-gradient-to-r from-blue-500 to-indigo-500",
      icon: <MessageCircle className="w-12 h-12 text-white" />,
      image:
        "https://blog.hootsuite.com/wp-content/uploads/2022/03/Instagram-comments.svg",
      points: 15,
    },
    {
      title: "INSTAGRAM PROFILE FOLLOW",
      description: "Follow Any Profile on Instagram! &",
      subDescription: "Earn Exciting Rewards",
      color: "bg-gradient-to-r from-orange-400 to-amber-500",
      icon: <UserPlus className="w-12 h-12 text-white" />,
      image:
        "https://as2.ftcdn.net/v2/jpg/06/02/32/73/1000_F_602327387_5oDTV8FTDezinWSQaP0R8NIIHRidVrjN.jpg",
      points: 20,
    },
  ];

  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Instagram Task</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default InstagramTask;
