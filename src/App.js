import Mainarea from "./Components/Mainarea";
import Navbar from "./Components/Navbar";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";

const App = () => {
  const [theme, setTheme] = useState('dark');

  if (theme === 'light') {
    document.body.style.backgroundColor = "#fff";
  }
  else {
    document.body.style.backgroundColor = "#181818";
  }

  const handleThemeChange = () => {
    if (theme === 'light') {
      setTheme('dark');
      document.body.style.backgroundColor = "#181818";
    }
    else {
      setTheme('light');
      document.body.style.backgroundColor = "#fff";
    }
  }

  return (
    <>
      <BrowserRouter>
      <Navbar theme={theme} switchTheme={handleThemeChange} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/play/easy" element={<Mainarea key="4" difficulty="4" theme={theme} />} />
        <Route path="/play/medium" element={<Mainarea key="5" difficulty="5" theme={theme} />} />
        <Route path="/play/hard" element={<Mainarea key="6" difficulty="6" theme={theme} />} />
      </Routes>
    </BrowserRouter>
      
      {/* <Mainarea difficulty="4" theme={theme} /> */}
    </>
  );
}

export default App;
