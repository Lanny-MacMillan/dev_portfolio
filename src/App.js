import React from 'react';
import Main from './components/Main.js';
import { Route, Routes } from 'react-router';
import ViewPage from './components/views/ViewPage.js';

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
        <Route path="/AiToolbox" element={<ViewPage />} />
        <Route path="/TheQuickStopLibrary" element={<ViewPage />} />
        <Route path="/TheAdventure" element={<ViewPage />} />
        <Route path="/AmiiboApp" element={<ViewPage />} />
        <Route path="/CrappyBird" element={<ViewPage />} />
        <Route path="/2dNightmare" element={<ViewPage />} />
        <Route path="/TetrisReact" element={<ViewPage />} />
        <Route path="/GeometryDash" element={<ViewPage />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
