import styles from "./cardMenu.module.css";
import { TabLink } from "../TabLink/tabLink";
import { useSelector } from "react-redux";
import { selectDishById } from "../../redux/entities/dishes/slice";

export const CardMenu = ({ menu }) => {
  return (
    <div className={styles.container}>
      <div>
        {menu.map((id) => {
          const { name } = useSelector((state) => selectDishById(state, id));

          return (
            <div key={id} className={styles.item}>
              <TabLink to={`/dish/${id}`} text={name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
