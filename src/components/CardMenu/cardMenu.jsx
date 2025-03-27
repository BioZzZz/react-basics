import { CardMenuDishContainer } from "../cardMenuDish/cardMenuDishContainer";
import styles from "./cardMenu.module.css";

export const CardMenu = ({ menu }) => {
  return (
    <div className={styles.container}>
      <h3>Меню</h3>
      <div>
        {menu.map((id) => (
          <div key={id}>
            <CardMenuDishContainer id={id} />
          </div>
        ))}
      </div>
    </div>
  );
};
