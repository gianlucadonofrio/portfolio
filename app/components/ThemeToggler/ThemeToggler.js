import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IconSunHigh, IconMoon } from "@tabler/icons";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle Dark Mode"
      className="h-12 w-12 flex items-center justify-center hover:bg-[var(--hover-nav)] rounded-full"
    >
      <span
        className="text-3xl "
      >
        {theme === "light" ? <IconSunHigh /> : <IconMoon />}
      </span>
    </button>
  );
};
