import { useEffect, useState } from "react";

const useResize = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => document.removeEventListener("resize", handleResize);
  }, []);
  return { isMobile };
};
export default useResize;
