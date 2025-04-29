export const getReviewsByRestaurantId = async (restaurantId) => {
  const data = await fetch(
    `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`,
    { next: { tags: ["getReviewsByRestaurantId"] } }
  );

  return data.json();
};
