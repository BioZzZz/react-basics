import { createRoot } from "react-dom/client";
import { restaurants } from "./assets/mock";
import "./main.css";

const rootDIV = document.getElementById("root");
const reactRoot = createRoot(rootDIV);
const restaurantsList = restaurants;

reactRoot.render(
  <div>
    {restaurantsList.map((rest) => {
      return (
        <div className="card" key={rest.id}>
          <div className="restaurant-name">
            <h2>{rest.name}</h2>
          </div>
          <h3>Меню</h3>
          <ul>
            {rest.menu.map((menuElem) => (
              <li key={menuElem.id}>
                {`${menuElem.name} (${menuElem.ingredients.join(", ")})`}
              </li>
            ))}
          </ul>
          <h3>Отзывы</h3>
          <ul>
            {rest.reviews.map((reviewElem) => (
              <li key={reviewElem.id}>
                {`${reviewElem.user}: ${reviewElem.text}`}
              </li>
            ))}
          </ul>
        </div>
      );
    })}
  </div>
);
