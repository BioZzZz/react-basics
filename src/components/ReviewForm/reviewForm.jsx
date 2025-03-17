import { Counter } from "../Counter/counter";
import { useReviewForm } from "./useReviewForm";

export const ReviewForm = () => {
  const { name, text, count, setName, setText, changeCounter, clearForm } =
    useReviewForm();

  return (
    <div className="form-container">
      <h3 className="form-name">Оставь свой отзыв</h3>
      <div id="myForm">
        <div className="form-group">
          <label>Имя:</label>
          <input value={name} onChange={setName} />
        </div>
        <div className="form-group">
          <label>Отзыв:</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={text}
            onChange={setText}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Рейтинг:</label>
          <Counter count={count} onClickCallback={changeCounter} />
        </div>
        <button type="button" onClick={clearForm}>
          Clear
        </button>
      </div>
    </div>
  );
};
