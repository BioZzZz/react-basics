import { useState, useEffect } from "react";
import { calcScrollProgress } from "./calcScrollProgress";

export const ProgressBar = () => {
  const [progressWidth, setWidth] = useState(0);

  const scrollFunc = () => {
    setWidth(calcScrollProgress());
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollFunc);

    return () => {
      document.removeEventListener("scroll", scrollFunc);
    };
  }, [progressWidth]);

  return (
    <div className="progress-bar" style={{ width: progressWidth + "%" }}></div>
  );
};
