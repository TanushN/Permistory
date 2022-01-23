import "./App.css";
import { useState } from "react";
import ThemeContext, { Theme } from "./context/ThemeContext";
import Navbar from "./components/navbar";
import AppRouter from "./routers/Router";

function App() {
  const [theme, setTheme] = useState("light");
  const value = { theme, setTheme };
  return (
    <>
      <ThemeContext.Provider value={value as Theme}>
        <div className="app">
          <Navbar />
          <div className="main-section">
          <AppRouter />
          </div>
          <div className="footer-section"></div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;