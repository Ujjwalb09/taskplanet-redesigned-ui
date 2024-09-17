import React from "react";
import { UserPlus, Users } from "lucide-react";
import TaskCard from "./templates/TaskCard";

const TelegramTask = () => {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Telegram Task</h2>

      <TaskCard
        title="TELEGRAM CHANNEL SUBSCRIBE"
        description="Subscribe Any Telegram Channel &"
        subDescription="Earn Exciting Rewards & Points"
        color="bg-gradient-to-br from-blue-300 via-blue-400 to-blue-300"
        icon={<UserPlus className="w-12 h-12 text-blue-500" />}
        image="https://hitbtc.com/blog/content/images/wordpress/2018/03/telegram-logo_1.jpg"
      />

      <TaskCard
        title="TELEGRAM GROUP JOIN"
        description="Join Any Telegram Group &"
        subDescription="Earn Exciting Rewards & Points"
        color="bg-gradient-to-br from-blue-400 via-blue-500 to-cyan-500"
        icon={<Users className="w-12 h-12 text-white" />}
        image="https://media.licdn.com/dms/image/v2/C5622AQG1d4ee-J-TTA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1608098609372?e=2147483647&v=beta&t=zxpHMJXZjYijWW2UEAe8RBl1Dqvku0ZKvv-VL1Y80IM"
      />
    </div>
  );
};

export default TelegramTask;
