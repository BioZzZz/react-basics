import { RestaurantsPage } from "../../pages/restaurantsPage.jsx";
import { Layout } from "../Layout/layout.jsx";
import { ThemeContext } from "../ThemeContext/themeContext";
import { UserContext } from "../UserContext/userContext";
import { Provider } from "react-redux";
import { store } from "../../redux/store.js";
import "./app.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { RestaurantPage } from "../../pages/restaurantPage.jsx";
import { RestaurantMenuPage } from "../../pages/restaurantMenuPage.jsx";
import { RestaurantReviewsPage } from "../../pages/restaurantReviewsPage.jsx";
import { DishPage } from "../../pages/dishPage.jsx";
import { NotFoundPage } from "../../pages/notFoundPage/notFoundPage.jsx";
import { HomePage } from "../../pages/homePage/homePage.jsx";

export const App = () => {
  return (
    <Provider store={store}>
      <UserContext>
        <ThemeContext>
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="/restaurants" element={<RestaurantsPage />}>
                  <Route path=":restaurantId" element={<RestaurantPage />}>
                    <Route index element={<Navigate to="menu" />} />
                    <Route path="menu" element={<RestaurantMenuPage />} />
                    <Route path="reviews" element={<RestaurantReviewsPage />} />
                  </Route>
                </Route>
                <Route path="/dish/:dishId" element={<DishPage />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext>
      </UserContext>
    </Provider>
  );
};
