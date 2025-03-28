import { RestaurantsPage } from "../RestaurantsPage/restaurantsPage.jsx";
import { Layout } from "../Layout/layout.jsx";
import { ThemeContext } from "../ThemeContext/themeContext";
import { UserContext } from "../UserContext/userContext";
import "./app.css";

export const App = () => {
  return (
    <UserContext>
      <ThemeContext>
        <Layout>
          <RestaurantsPage />
        </Layout>
      </ThemeContext>
    </UserContext>
  );
};
