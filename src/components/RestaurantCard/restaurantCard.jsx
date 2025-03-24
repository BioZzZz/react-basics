import { use } from "react";
import { CardMenu } from "../CardMenu/cardMenu";
import { CardReviews } from "../CardReviews/cardReviews";
import { ReviewForm } from "../ReviewForm/reviewForm";
import styles from "./restaurantCard.module.css";
import { UserContext } from "../UserContext";

export const RestaurantCard = ({ restaurant }) => {
  const { user } = use(UserContext);

  return (
    <div className={styles.card}>
      <div className={styles.restaurantName}>
        <h2>{restaurant.name}</h2>
      </div>
      <CardMenu menu={restaurant.menu} />
      {restaurant.reviews.length ? (
        <CardReviews reviews={restaurant.reviews} />
      ) : null}
      {user && <ReviewForm key={restaurant.id} />}
    </div>
  );
};
