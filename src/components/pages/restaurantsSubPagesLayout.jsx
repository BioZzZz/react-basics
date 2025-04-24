"use client";

import { useGetRestaurantsQuery } from "../../redux/services/api.js";
import { Loader } from "../Loader/loader.jsx";
import { TabLink } from "../TabLink/tabLink.jsx";

export const RestaurantsSubPagesLayout = ({ children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();

  if (isLoading) {
    return <Loader text={"Loading restaurants..."} />;
  }

  if (isError) {
    return <Loader text={"Loading restaurants error"} />;
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
          />
        ))}
      </div>
      {children}
    </>
  );
};
