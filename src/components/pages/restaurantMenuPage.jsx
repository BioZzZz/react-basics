"use client";

import { CardMenu } from "../CardMenu/cardMenu";
import { Loader } from "../Loader/loader";
import { useGetDishesByRestaurantIdQuery } from "../../redux/services/api";

export const RestaurantMenuPage = ({ restaurantId }) => {
  const { data, isLoading, isError } =
    useGetDishesByRestaurantIdQuery(restaurantId);

  if (isLoading) {
    return <Loader text={"Loading dishes..."} />;
  }

  if (isError) {
    return <Loader text={"Loading dishes error"} />;
  }

  return <CardMenu menu={data} />;
};
