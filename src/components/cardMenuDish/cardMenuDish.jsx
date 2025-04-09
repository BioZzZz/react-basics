import { TabLink } from "../TabLink/tabLink";
import styles from "./cardMenuDish.module.css";

export const CardMenuDish = ({ id, name }) => {
  return (
    <div key={id} className={styles.item}>
      <TabLink
        href={`/dish/${id}`}
        text={name}
        isActive={false}
        styleType={"link"}
      />
    </div>
  );
};
