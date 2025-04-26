import { getRestaurants } from "../../services/get-restaurants.js";
import { TabLink } from "../TabLink/tabLink.jsx";

export const RestaurantsSubPagesLayout = async ({ children }) => {
  const data = await getRestaurants();

  if (!data) {
    return null;
  }

  return (
    <>
      <div>
        {data.map(({ id, name }) => (
          <TabLink
            key={id}
            href={`/restaurants/${id}`}
            text={name}
            activeExpr={id}
            styleType={"button"}
          />
        ))}
      </div>
      {children}
    </>
  );
};
