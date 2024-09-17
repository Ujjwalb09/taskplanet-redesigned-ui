import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { div } from "framer-motion/client";
import { Route, Routes } from "react-router-dom";
import InstagramTask from "./components/task components/InstagramTask";
import FacebookTask from "./components/task components/FacebookTask";
import TwitterTask from "./components/task components/TwitterTask";
import YoutubeTask from "./components/task components/YoutubeTask";
import TelegramTask from "./components/task components/TelegramTask";
import LinkedInTask from "./components/task components/LinkedInTask";
import TaskDetails from "./components/task components/TaskDetails";

function App() {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto">
      <Header />
      <div className="flex-grow bg-gray-100">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/instagram-tasks" element={<InstagramTask />} />
          <Route path="/facebook-tasks" element={<FacebookTask />} />
          <Route path="/twitter-tasks" element={<TwitterTask />} />
          <Route path="/youtube-tasks" element={<YoutubeTask />} />
          <Route path="/telegram-tasks" element={<TelegramTask />} />
          <Route path="/linkedin-tasks" element={<LinkedInTask />} />
          <Route path="/task-details" element={<TaskDetails />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
