"use client";

import { Loader } from "../Loader/loader";
import { Dish } from "../Dish/dish";
import { useGetDishByIdQuery } from "../../redux/services/api";

export const DishPage = ({ dishId }) => {
  const { data, isLoading, isError } = useGetDishByIdQuery(dishId);

  if (isLoading) {
    return <Loader text={"Loading dish..."} />;
  }

  if (isError) {
    return <Loader text={"Loading dish error"} />;
  }

  return <Dish dish={data} />;
};
