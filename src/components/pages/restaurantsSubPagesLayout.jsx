"use client";

import { useGetRestaurantsQuery } from "../../redux/services/api.js";
import { Loader } from "../Loader/loader.jsx";
import { TabLink } from "../TabLink/tabLink.jsx";
import { usePathname } from "next/navigation.js";

export const RestaurantsSubPagesLayout = ({ children }) => {
  const { data, isLoading, isError } = useGetRestaurantsQuery();
  const path = usePathname();

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
            isActive={path.includes(id)}
            styleType={"button"}
          />
        ))}
      </div>
      {children}
    </>
  );
};
