import { Link } from "react-router";
import styles from "./cardMenu.module.css";

export const CardMenu = ({ menu }) => {
  return (
    <div className={styles.container}>
      <div>
        {menu.map(({ id, name }) => {
          return (
            <div key={id} className={styles.item}>
              <Link className={styles.text} to={`/dish/${id}`}>
                {name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
