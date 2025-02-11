// App.jsx
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
import ModalContent from "./components/ModalContent.jsx"; // наш динамический модальный компонент

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Если location.state.backgroundLocation отсутствует (например, при прямом переходе),
  // подставляем фоновый контент с главной страницы.
  const background = (location.state && location.state.backgroundLocation) || {
    pathname: "/pioner-app",
  };

  return (
    <main>
      <header>
        {/* Примеры ссылок для открытия модальных окон */}
        <Link
          to="/pioner-app/1"
          state={{ backgroundLocation: location }}
          className="link-button"
        >
          1 объект
        </Link>
        <Link
          to="/pioner-app/2"
          state={{ backgroundLocation: location }}
          className="link-button"
        >
          2 объект
        </Link>
      </header>

      {/* Фоновый контент: если пользователь перешёл напрямую по URL модалки,
          мы подставляем фоновую страницу (HomePage) */}
      <Routes location={background}>
        <Route path="/pioner-app" element={<HomePage />} />
        {/* Другие фоновые маршруты можно добавить здесь */}
      </Routes>

      {/* Динамическое модальное окно: рендерится, если путь не равен только "/pioner-app" */}
      {location.pathname !== "/pioner-app" && (
        <Routes>
          <Route
            path="/pioner-app/:id"
            element={
              <ModalContent
                open={true}
                onClose={() => navigate("/pioner-app")}
              />
            }
          />
        </Routes>
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
