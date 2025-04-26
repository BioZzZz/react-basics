export const getDishById = async (dishId) => {
  const data = await fetch(`http://localhost:3001/api/dish/${dishId}`);

  return data.json();
};
