export const CardReviews = ({ reviews }) => {
  return (
    <>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((reviewElem) => (
          <li key={reviewElem.id}>
            {`${reviewElem.user}: ${reviewElem.text}`}
          </li>
        ))}
      </ul>
    </>
  );
};
