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
            href={`/restaurants/${id}/menu`}
            text={name}
            activeExpr={id}
            styleType={"button"}
            prefetch={
              id === "bb8afbec-2fec-491f-93e9-7f13950dd80b" ||
              id === "d9241927-09e1-44f3-8986-a76346869037"
            }
          />
        ))}
      </div>
      {children}
    </>
  );
};
