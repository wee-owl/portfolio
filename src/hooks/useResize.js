import { useState, useEffect } from "react";
import { SCREEN_1024 } from "#utils/breakpoints";


export const useResize = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = (e) => setWidth(e.target.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isScreen1024: width <= SCREEN_1024 };
};