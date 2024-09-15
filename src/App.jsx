import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-100">
      <Header />
      <Main />
    </div>
  );
}

export default App;
