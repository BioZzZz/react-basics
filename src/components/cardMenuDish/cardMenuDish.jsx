import styles from "./cardMenuDish.module.css";
import { TabLink } from "../TabLink/tabLink";

export const CardMenuDish = ({ id, name }) => {
  return (
    <div key={id} className={styles.item}>
      <TabLink to={`/dish/${id}`} text={name} />
    </div>
  );
};
