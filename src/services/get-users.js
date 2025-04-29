export const getUsers = async () => {
  const data = await fetch("http://localhost:3001/api/users", {
    next: { revalidate: 200 },
  });

  return data.json();
};
