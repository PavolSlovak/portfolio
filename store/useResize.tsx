"use client";

import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // Initialize state with the current window width
    window.addEventListener("resize", handleResize);
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return { isMobile };
};

export default useResize;
