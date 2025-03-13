import { CardMenuDish } from "../cardMenuDish/cardMenuDish";

export const CardMenu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((menuElem) => (
          <li key={menuElem.id}>
            <CardMenuDish
              name={menuElem.name}
              ingredients={menuElem.ingredients}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
