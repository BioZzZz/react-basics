import { Outlet } from "react-router";
import { Loader } from "../components/Loader/loader.jsx";
import { useGetRestaurantsQuery } from "../redux/services/api.js";
import { TabNavLink } from "../components/TabNavLink/tabNavLink.jsx";

export const RestaurantsPage = () => {
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
          <TabNavLink key={id} to={id} text={name} />
        ))}
        <Outlet />
      </div>
    </>
  );
};
