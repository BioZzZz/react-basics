import styles from "./cardMenuDish.module.css";
import { TabLink } from "../TabLink/tabLink";

export const CardMenuDish = ({ dish }) => {
  const { id, name } = dish;

  return (
    <div key={id} className={styles.item}>
      <TabLink to={`/dish/${id}`} text={name} />
    </div>
  );
};
