import { Counter } from "../Counter/counter";

export const CardMenu = ({ menu }) => {
  return (
    <>
      <h3>Меню</h3>
      <ul>
        {menu.map((menuElem) => (
          <li key={menuElem.id}>
            <span>
              {`${menuElem.name} (${menuElem.ingredients.join(", ")})`}
              <Counter />
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};
