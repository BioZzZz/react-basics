import { useState, useEffect } from "react";

export const ProgressBar = () => {
  const [progressWidth, setWidth] = useState(0);

  const scrollFunc = () => {
    const offsetHeight = document.documentElement.offsetHeight;
    const clientHeight = document.documentElement.clientHeight;
    const pageYOffset = window.pageYOffset;

    setWidth((pageYOffset / (offsetHeight - clientHeight)) * 100);
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
