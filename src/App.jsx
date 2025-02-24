// App.jsx
import "./App.css";
import "./index.css";
import "antd/dist/reset.css";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Navigate
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ModalContent from "./components/ModalContent.jsx"; // наш динамический модальный компонент

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/:id"
          element={
            <ModalContent
              open={true}
              onClose={() => navigate("/")}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}
