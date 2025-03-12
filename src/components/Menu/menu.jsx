import { useState } from "react";
import { RestaurantCard } from "../RestaurantCard/restaurantCard.jsx";

export const Menu = ({ restaurantsList }) => {
  let [activeId, setActiveId] = useState(restaurantsList[0].id);

  let changeActiveId = (event) => {
    if (event.target.dataset.id === activeId) return;

    setActiveId(event.target.dataset.id);

    Array.from(document.getElementsByClassName("card")).forEach((card) => {
      card.hidden = true;
    });
    document.getElementById(event.target.dataset.id).hidden = false;
  };

  return (
    <div>
      {restaurantsList.map(({ id, name }) => (
        <button key={id} onClick={changeActiveId} data-id={id}>
          {name}
        </button>
      ))}
    </div>
  );
};
