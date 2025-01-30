import "./App.css";
import "./index.css";
import "antd/dist/reset.css";
// import { useState } from "react";
// import { differences } from "./data.js";
import { Routes, Route, Link } from "react-router-dom";
// import Button from "./components/Button/Button.jsx";
import Background from "./components/Background.jsx";
import TimeSection from "./components/TimeSection.jsx";
import Homepage from "./pages/Homepage.jsx";

export default function App() {
  // const [content, setContent] = useState("Nazmi na menya");

  // function handleClick(type) {
  //   setContent(type);
  // }
  return (
    <main>
      <header></header>

      <Routes>
        <Route path="/pioner-app" element={<Homepage />}></Route>
      </Routes>

      {/* {tab === "effect" && <EffectSection />} */}
    </main>
  );
}

// <Button onClick={() => handleClick("way")}>{differences.way}</Button>
//           <Button onClick={() => handleClick("easy")}>
//             {differences.easy}
//           </Button>
//           <Button onClick={() => handleClick("program")}>
//             {differences.program}
//           </Button>
//           <p> {differences[content]}</p>
