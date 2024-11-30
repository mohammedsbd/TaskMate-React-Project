import { useState, useEffect } from "react";
import Logo from "../assets/10001.png";

function Header() {
 // Default to 'medium' if not found
const [theme, setTheme] = useState('light')

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
      document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate logo" />
        <span>Taskmate</span>
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={`light ${theme === "light" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={`medium ${theme === "medium" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={`dark ${theme === "dark" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={`gOne ${theme === "gOne" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={`gTwo ${theme === "gTwo" ? "activeTheme" : ""}`}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={`gThree ${theme === "gThree" ? "activeTheme" : ""}`}
        ></span>
      </div>
    </header>
  );
}

export default Header;
