import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const taskData = {
    title: task.title,
    description: task.description,
    color: task.color,
    subDescription: task.subDescription,
    image: task.image,
    points: task.points,
    link: task.link,
  };

  console.log(task);

  const handleClick = () => {
    navigate("/task-details", { state: { task: taskData } });
  };
  return (
    <Card className={`overflow-hidden ${task.color} text-white`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold font-poppins">
          {task.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-md font-barlow">{task.description}</p>
            <p className="text-sm font-light font-barlow">
              {task.subDescription}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {task.icon}
            <img
              src={task.image}
              alt="Task illustration"
              className="w-20 h-20 object-cover rounded-lg"
            />
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <motion.div
          className="w-full"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            onClick={handleClick}
            variant="secondary"
            className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-barlow"
          >
            Visit Task
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
