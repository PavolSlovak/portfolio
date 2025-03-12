import { MoonIcon, SunIcon } from "@heroicons/react/16/solid";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
const ThemeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <p>Loading...</p>;
  return (
    <button
      id="theme-toggle"
      className="text-dark_gray dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-full text-sm p-2 "
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      {/* Dark SVG Icon */}
      {resolvedTheme === "dark" && <MoonIcon className="w-6 h-6" />}
      {/* Light SVG Icon */}
      {resolvedTheme === "light" && <SunIcon className="w-6 h-6" />}
    </button>
  );
};
export default ThemeButton;
