import { useEffect, useState } from "react";

function ToggleTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <label className="swap swap-rotate">
      <input type="checkbox" onChange={toggleTheme} checked={theme === "dark"} />

      {/* 🌙 Moon (Dark mode) icon */}
      <svg
        className="swap-off fill-current w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21.752 15.002A9.718 9.718 0 0112 22c-5.523 0-10-4.477-10-10 0-4.418 2.865-8.167 6.839-9.509a1 1 0 011.276 1.276C9.167 5.865 8 8.831 8 12c0 4.418 3.582 8 8 8 3.169 0 6.135-1.167 8.233-3.115a1 1 0 00-1.481-1.383z" />
      </svg>

      {/* ☀️ Sun (Light mode) icon */}
      <svg
        className="swap-on fill-current w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M5.64 17.66l-1.41 1.41L2.81 18.3l1.41-1.41 1.42 1.41zm0-11.31l-1.41-1.41L2.81 5.7l1.41 1.41 1.42-1.41zM12 4a1 1 0 011-1h.01a1 1 0 01-.01 2h-.01a1 1 0 01-1-1zm6.36 1.36l1.41-1.41 1.41 1.41-1.41 1.42-1.41-1.42zM20 11a1 1 0 010 2h-.01a1 1 0 01.01-2H20zm-8 8a1 1 0 011-1h.01a1 1 0 01-.01 2h-.01a1 1 0 01-1-1zm6.36-1.36l1.41 1.41-1.41 1.41-1.42-1.41 1.42-1.41zM4 13a1 1 0 010-2h.01a1 1 0 01-.01 2H4zm8-7a5 5 0 100 10 5 5 0 000-10z" />
      </svg>
    </label>
  );
}

export default ToggleTheme;
