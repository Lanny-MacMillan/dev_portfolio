import { Route, Routes } from "react-router";
import Home from "./components/home/Home";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
