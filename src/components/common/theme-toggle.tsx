"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const isDark = saved === "dark";

    document.documentElement.classList.toggle("dark", isDark);
    setDark(isDark);
  }, []);

  const toggle = () => {
    const isDark = !dark;

    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
    setDark(isDark);
  };

  return (
    <button
      onClick={toggle}
      className="bg-surface text-text px-3 py-2 rounded"
    >
      {dark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
