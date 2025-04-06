import { CardMenuDish } from "../cardMenuDish/cardMenuDish";
import styles from "./cardMenu.module.css";

export const CardMenu = ({ menu }) => {
  return (
    <div className={styles.container}>
      <div>
        {menu.map(({ id, name }) => (
          <CardMenuDish name={name} id={id} key={id} />
        ))}
      </div>
    </div>
  );
};
