export const getReviewsByRestaurantId = async (restaurantId) => {
  const data = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
  );

  return data.json();
};
