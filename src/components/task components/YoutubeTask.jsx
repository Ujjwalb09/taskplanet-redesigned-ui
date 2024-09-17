import React from "react";
import { Heart, MessageCircle, ThumbsUp, Play } from "lucide-react";
import TaskCard from "./templates/TaskCard";

const YoutubeTask = () => {
  const tasks = [
    {
      title: "YouTube Shorts Like",
      description: "Like Any YouTube Shorts &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-black",
      icon: <Heart className="w-12 h-12 text-red-600" />,
      image:
        "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/10/Youtube-Shorts.webp?ssl=1&quality=80&w=f",
      points: 10,
    },
    {
      title: "YouTube Shorts Comment",
      description: "Comment on Any YouTube Shorts &",
      subDescription: "Earn Exciting Rewards & Points",
      color: "bg-gradient-to-br from-orange-600 via-orange-300 to-orange-400",
      icon: <MessageCircle className="w-12 h-12 text-orange-600" />,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq_AvO24opD8X7N3yxXeLf8HmEGJp0DUd3g&s",
      points: 15,
    },
    {
      title: "YouTube Videos Like",
      description: "Like Any YouTube Video &",
      subDescription: "Earn Exciting Rewards",
      color: "bg-pink-400",
      icon: <ThumbsUp className="w-12 h-12 text-pink-600" />,
      image:
        "https://i.pinimg.com/736x/31/fd/3b/31fd3b16e07573532668342e3754b0c2.jpg",
      points: 20,
    },
    {
      title: "YouTube Videos Comment",
      description: "Comment on Any YouTube Video &",
      subDescription: "Earn Exciting Rewards",
      color: "bg-gradient-to-r from-pink-400 to-purple-400",
      icon: <MessageCircle className="w-12 h-12 text-white" />,
      image:
        "https://media.sproutsocial.com/uploads/2022/08/Youtube_Comments_v4.jpg",
      points: 25,
    },
    {
      title: "YouTube Channel Subscribe",
      description: "Subscribe Any YouTube Channel &",
      subDescription: "Earn Exciting Rewards",
      color: "bg-black",
      icon: <Play className="w-12 h-12 text-yellow-400" />,
      image:
        "https://samsoncentre.org.uk/wp-content/uploads/2020/05/55CDDE51-22DB-4C96-810B-D101082C314F.png",
      points: 30,
    },
  ];
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">YouTube Task</h2>

      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default YoutubeTask;
