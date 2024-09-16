import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { div } from "framer-motion/client";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="flex flex-col max-w-md mx-auto">
      <Header />
      <div className="flex flex-col max-w-md mx-auto bg-gray-100">
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
