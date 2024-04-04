import React from "react";
import Main from "./components/Main.js";
import { Route, Routes } from "react-router";
import Quickstop from "./components/views/Quickstop.js";
import TheAdventure from "./components/views/TheAdventure.js";
import TetrisReact from "./components/views/TetrisReact.js";
import CrappyBird from "./components/views/CrappyBird.js";
import Nightmare from "./components/views/Nightmare.js";
import GeoDash from "./components/views/GeoDash.js";

function App() {
  // const [largeScreen, setLargeScreen] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     if (window.innerWidth > 750) {
  //       setLargeScreen(true);
  //     } else {
  //       setLargeScreen(false);
  //     }
  //   };
  //   handleResize();
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/VacationApp" element={<Main />} />
        <Route path="/TheQuickStopLibrary" element={<Quickstop />} />
        <Route path="/TheAdventure" element={<TheAdventure />} />
        <Route path="/AmiiboApp" element={<Main />} />
        <Route path="/CrappyBird" element={<CrappyBird />} />
        <Route path="/2dNightmare" element={<Nightmare />} />
        <Route path="/TetrisReact" element={<TetrisReact />} />
        <Route path="/GeometryDash" element={<GeoDash />} />
      </Routes>
    </>
  );
}

export default App;
