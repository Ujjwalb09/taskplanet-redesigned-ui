import React from "react";
import { Heart, MessageCircle, UserPlus, Bird } from "lucide-react";
import TaskCard from "./templates/TaskCard";

const TwitterTask = () => {
  const tasks = [
    {
      title: "TWITTER POST LIKE",
      description: "Like Any Twitter Post &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-gradient-to-r from-black to-blue-900",
      icon: <Heart className="w-12 h-12 text-white" />,
      image:
        "https://t3.ftcdn.net/jpg/07/80/74/84/360_F_780748464_faeCWFwqRWnvF1zPfR1NKZXOeQBwpOPX.jpg",
      points: 10,
    },
    {
      title: "TWITTER POST COMMENT",
      description: "Comment on Any Twitter Post &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-gradient-to-r from-gray-700 to-emerald-900",
      icon: <MessageCircle className="w-12 h-12 text-white" />,
      image: "https://img.freepik.com/premium-vector/comment-icon_9385-10.jpg",
      points: 15,
    },
    {
      title: "TWITTER ACCOUNT FOLLOW",
      description: "Follow Any Account on Twitter! &",
      subDescription: "Earn Exciting Rewards",
      color: "bg-gradient-to-r from-black to-purple-600",
      icon: <UserPlus className="w-12 h-12 text-white" />,
      image:
        "https://img.freepik.com/free-vector/new-twitter-logo-x-icon-black-background_1017-45427.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726272000&semt=ais_hybrid",
      points: 20,
    },
    {
      title: "TWITTER TWEET",
      description: "Tweet on Twitter &",
      subDescription: "Earn Exciting Rewards",
      color: "bg-gradient-to-r from-gray-600 to-rose-700",
      icon: <Bird className="w-12 h-12 text-white" />,
      image:
        "https://feedalpha.com/wp-content/uploads/2023/01/how-to-tag-someone-on-twitter-3-jpg.webp",
      points: 25,
    },
  ];
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Twitter Task</h2>

      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default TwitterTask;
