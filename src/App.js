import React from 'react';
import Main from './components/Main.js';
import { Route, Routes } from 'react-router';
import ViewPage from './components/views/ViewPage.js';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/AiToolbox" element={<ViewPage />} />
        <Route path="/TheQuickStopLibrary" element={<ViewPage />} />
        <Route path="/TheAdventure" element={<ViewPage />} />
        <Route path="/Thryv" element={<ViewPage />} />
        <Route path="/CrappyBird" element={<ViewPage />} />
        <Route path="/2dNightmare" element={<ViewPage />} />
        <Route path="/TetrisReact" element={<ViewPage />} />
        <Route path="/GeometryDash" element={<ViewPage />} />
        <Route path="/Plan.Eat.Repeat." element={<ViewPage />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
