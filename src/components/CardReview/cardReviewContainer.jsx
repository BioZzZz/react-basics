import { useSelector } from "react-redux";
import { CardReview } from "./cardReview";
import { selectReviewById } from "../../redux/entities/reviews/slice";

export const CardReviewContainer = ({ id }) => {
  const review = useSelector((state) => selectReviewById(state, id));

  if (!review) {
    return null;
  }

  return <CardReview review={review} />;
};
