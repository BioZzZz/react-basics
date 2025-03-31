import styles from "./homePage.module.css";
import { TabLink } from "../../components/TabLink/tabLink";

export const HomePage = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <h3>Откройте для себя вкусные блюда</h3>
        <TabLink to="/restaurants" text="К ресторанам!" />
      </div>
    </div>
  );
};
