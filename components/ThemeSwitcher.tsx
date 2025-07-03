"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Щоб уникнути гідратації різниці
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      style={{
        background: "var(--accent)",
        color: "#000",
        padding: "0.5rem 1rem",
        borderRadius: "6px",
        cursor: "pointer",
        marginTop: "2rem",
      }}
    >
      Switch to {theme === "dark" ? "Light" : "Dark"} Mode
    </button>
  );
}
