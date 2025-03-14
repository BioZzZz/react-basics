import { CardMenu } from "../CardMenu/cardMenu";
import { CardReviews } from "../CardReviews/cardReviews";

export const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="card">
      <div className="restaurantaurant-name">
        <h2>{restaurant.name}</h2>
      </div>
      <CardMenu menu={restaurant.menu} />
      {restaurant.reviews.length ? (
        <CardReviews reviews={restaurant.reviews} />
      ) : null}
    </div>
  );
};
