"use client"; // Ensure this is a client component

import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false); // Default to false to avoid SSR issues

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure code only runs on the client

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isMobile };
};

export default useResize;
