import "./App.css";
import "./index.css";
import "antd/dist/reset.css";
import { useState } from "react";
import { differences } from "./data.js";
import Button from "./components/Button/Button.jsx";
import Background from "./components/Background.jsx";

export default function App() {
  const [content, setContent] = useState("Nazmi na menya");

  function handleClick(type) {
    setContent(type);
  }
  return (
    <body>
      <div>
        <section>
          <Button onClick={() => handleClick("way")}>{differences.way}</Button>
          <Button onClick={() => handleClick("easy")}>
            {differences.easy}
          </Button>
          <Button onClick={() => handleClick("program")}>
            {differences.program}
          </Button>
          <p> {differences[content]}</p>
        </section>
      </div>
      <Background />
    </body>
  );
}
