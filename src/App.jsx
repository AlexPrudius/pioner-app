import "./App.css";
import "./index.css";
import "antd/dist/reset.css";
import {
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ID1 from "./components/id/ID1.jsx";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Если backgroundLocation отсутствует, задаём его по умолчанию (главная страница)
  const background = (location.state && location.state.backgroundLocation) || {
    pathname: "/pioner-app",
  };

  return (
    <main>
      <header>
        <div>
          <Link to="/pioner-app/">Home</Link>
        </div>
        {/* При клике передаём текущее местоположение как фон */}
        <Link to="/pioner-app/1" state={{ backgroundLocation: location }}>
          Открыть модалку для ID1
        </Link>
      </header>

      {/* Фоновая страница. Если пользователь зашёл напрямую в /pioner-app/1, мы подставим HomePage */}
      <Routes location={background}>
        <Route path="/pioner-app" element={<HomePage />} />
        {/* Другие маршруты фонового контента можно добавить здесь */}
      </Routes>

      {/* Модальное окно отрисовывается поверх, если URL соответствует модальному */}
      {location.pathname === "/pioner-app/1" && (
        <ID1 open={true} onClose={() => navigate("/pioner-app")} />
      )}
    </main>
  );
}

// import "./App.css";
// import "./index.css";
// import {
//   Routes,
//   Route,
//   Link,
//   useLocation,
//   useNavigate,
// } from "react-router-dom";

// import HomePage from "./pages/HomePage.jsx";
// import ID1 from "./components/id/ID1.jsx";
// import Button from "./components/Button/Button";

// export default function App() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const background = location.state && location.state.backgroundLocation;
//   // const [content, setContent] = useState("Nazmi na menya");

//   // function handleClick(type) {
//   //   setContent(type);
//   // }
//   return (
//     <main>
//       <header>
//         <div>
//           <Link to="/pioner-app/">Home</Link>
//         </div>

//         <Link to="/pioner-app/1" state={{ backgroundLocation: location }}>
//           Открыть модалку для ID1
//         </Link>
//       </header>
//       <>
//         <Routes location={background || location}>
//           <Route path="/pioner-app" element={<HomePage />}></Route>

//           <Route
//             path="/pioner-app/1"
//             element={<ID1 open={true} onClose={() => navigate(-1)} />}
//           />
//           {/* <Route path="/pioner-app/1" element={<ID1 />}></Route> */}
//           {/* <Route path="/pioner-app/:id" element={<ObjectModal />}></Route> */}
//         </Routes>

//         {/* {tab === "effect" && <EffectSection />} */}
//       </>
//     </main>
//   );
// }

// <Button onClick={() => handleClick("way")}>{differences.way}</Button>
//           <Button onClick={() => handleClick("easy")}>
//             {differences.easy}
//           </Button>
//           <Button onClick={() => handleClick("program")}>
//             {differences.program}
//           </Button>
//           <p> {differences[content]}</p>
