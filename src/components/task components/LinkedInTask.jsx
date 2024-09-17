import React from "react";
import { UserPlus, Users } from "lucide-react";
import TaskCard from "./templates/TaskCard";

const TelegramTask = () => {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 p-4">
      <h2 className="text-2xl font-bold text-center mb-4">Linkedin Task</h2>

      <TaskCard
        title="LinkedIn Profile Follow"
        description="Follow Any LinkedIn Profile &"
        subDescription="Earn Exciting Rewards & Points"
        color="bg-gradient-to-br from-blue-500 via-blue-400 to-blue-200"
        icon={<UserPlus className="w-12 h-12 text-blue-500" />}
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s"
      />
    </div>
  );
};

export default TelegramTask;
