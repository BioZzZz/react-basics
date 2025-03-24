import { useState, useEffect } from "react";
import { calcScrollProgress } from "./calcScrollProgress";
import styles from "./progressBar.module.css";

export const ProgressBar = () => {
  const [progressWidth, setWidth] = useState(0);

  useEffect(() => {
    const scrollFunc = () => {
      setWidth(calcScrollProgress());
    };

    document.addEventListener("scroll", scrollFunc);

    return () => {
      document.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <div
      className={styles.progressBar}
      style={{ width: progressWidth + "%" }}
    ></div>
  );
};
