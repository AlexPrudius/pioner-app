import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router basename={process.env.NODE_ENV === 'production' ? '/pioner-app' : ''}>
    <App />
  </Router>
);
