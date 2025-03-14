import { CardMenuDish } from "../cardMenuDish/cardMenuDish";

export const CardMenu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map(({ id, name, ingredients }) => (
          <li key={id}>
            <CardMenuDish name={name} ingredients={ingredients} />
          </li>
        ))}
      </ul>
    </>
  );
};
