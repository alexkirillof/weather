import React, { useState } from "react";
import "./App.css";
import MainComponent from "./components/Layout/MainComponent";
import SidePanel from "./components/Layout/SidePanel";
import { Context } from "./hooks/Context";

function App() {
  const [isDark, setIsDark] = useState(false);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Context>
      <div className={`App ${isDark ? "dark-theme" : ""}`}>
        {/* !-- БОКОВОЕ МЕНЮ -- */}

        <SidePanel changeTheme={changeTheme} />

        {/* !-- ОСНОВНОЙ БЛОК -- */}

        <MainComponent />
      </div>
    </Context>
  );
}

export default App;
