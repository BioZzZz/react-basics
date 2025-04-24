import Link from "next/link";
import styles from "./homePage.module.css";

export const HomePage = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h3>Откройте для себя вкусные блюда</h3>
        <Link href="/restaurants">К ресторанам!</Link>
      </div>
    </div>
  );
};
