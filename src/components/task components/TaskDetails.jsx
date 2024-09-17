import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram } from "lucide-react";
import { useLocation } from "react-router-dom";
import { FileInput, Label } from "flowbite-react";
import { motion } from "framer-motion";

export default function TaskDetails() {
  const location = useLocation();
  const { task } = location.state;

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className={`${task.color} text-white p-4`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={task.image}
              alt="Task illustration"
              className="w-14 h-14 object-cover rounded-lg"
            />
            <h2 className="text-xl font-bold font-poppins">{task.title}</h2>
          </div>
          <span className="bg-white text-pink-600 px-3 py-1 rounded-full text-md font-bold text-nowrap font-barlow">
            {task.points} Points
          </span>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="details" className="w-full">
          <TabsList className="grid w-full grid-cols-3 font-poppins">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="disclaimer">Disclaimer</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="p-4 space-y-4">
            <div>
              <h3 className="font-semibold">Title</h3>
              <p className="font-poppins">{task.title}</p>
            </div>
            <div>
              <h3 className="font-semibold">Description</h3>
              <p className="text-sm text-gray-600 font-poppins">
                {task.description} {task.subDescription}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold">Task Link:</h3>
              <button class="bg-green-400 hover:bg-green-600 text-white font-bold py-1 px-2 rounded shadow transition duration-300 ease-in-out text-xs font-barlow">
                Start Task
              </button>
            </div>
            <div className="flex items-center gap-3">
              <h3 className="font-semibold">Points:</h3>
              <span className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-md text-sm font-semibold font-poppins">
                {task.points}
              </span>
            </div>
            <div className="space-y-2">
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Upload file" />
              </div>
              <FileInput id="file-upload" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  className={`w-full ${task.color} text-white font-barlow`}
                >
                  Submit
                </Button>
              </motion.div>
            </div>
          </TabsContent>
          <TabsContent value="earnings" className="p-4 space-y-4">
            <ol className="list-decimal list-inside space-y-2 font-poppins">
              <li>
                {`You will get ${task.points} points on submission of proof of task in form of
                screenshot.`}
              </li>
              <li>
                You will earn your points on successfully verification of your
                task by the task creator.
              </li>
              <li>Task verification may take 24-48 hours.</li>
            </ol>
          </TabsContent>
          <TabsContent value="disclaimer" className="p-4 space-y-4">
            <ol className="list-decimal list-inside space-y-2 font-poppins">
              <li>
                Any fraud activity may result in blocking of your account.
              </li>
              <li>
                You must not unfollow/unlike/undo your action atleast for 30
                days after submission as this may lead to account suspension.
              </li>
            </ol>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
