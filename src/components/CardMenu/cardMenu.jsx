import { CardMenuDishContainer } from "../cardMenuDish/cardMenuDishContainer";
import styles from "./cardMenu.module.css";

export const CardMenu = ({ menu }) => {
  return (
    <div className={styles.container}>
      <div>
        {menu.map((id) => (
          <CardMenuDishContainer id={id} key={id} />
        ))}
      </div>
    </div>
  );
};
