import Link from "next/link";
import styles from "./errorPage.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div>Уууупс! Что-то пошло не так...</div>
        <div>
          <Link href="/">На главную</Link>
        </div>
      </div>
    </div>
  );
};
