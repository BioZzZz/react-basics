export const getDishesByRestaurantId = async (restaurantId) => {
  const data = await fetch(
    `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
  );

  return data.json();
};
