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

const TaskCard = ({
  title,
  description,
  subDescription,
  color,
  icon,
  image,
}) => {
  return (
    <Card className={`overflow-hidden ${color} text-white`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
      </CardHeader>

      <CardContent className="pb-2">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm">{description}</p>
            <p className="text-xs font-light">{subDescription}</p>
          </div>
          <div className="flex items-center space-x-2">
            {icon}
            <img
              src={image}
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
            variant="secondary"
            className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300"
          >
            Visit Task
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default TaskCard;
