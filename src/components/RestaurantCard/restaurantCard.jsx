import { use } from "react";
import { CardMenu } from "../CardMenu/cardMenu";
import { CardReviews } from "../CardReviews/cardReviews";
import { ReviewForm } from "../ReviewForm/reviewForm";
import { UserContext } from "../UserContext";
import styles from "./restaurantCard.module.css";

export const RestaurantCard = ({ restaurant }) => {
  const { user } = use(UserContext);
  const { id, name, menu, reviews } = restaurant;

  return (
    <div className={styles.card}>
      <div className={styles.restaurantName}>
        <h2>{name}</h2>
      </div>
      <CardMenu menu={menu} />
      {reviews.length ? <CardReviews reviews={reviews} /> : null}
      {user && <ReviewForm key={id} />}
    </div>
  );
};
