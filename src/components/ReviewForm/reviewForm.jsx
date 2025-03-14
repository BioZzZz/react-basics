import { Counter } from "../Counter/counter";
import { useReducer } from "react";
import {
  DEFAULT_FORM_VALUE,
  CHANGE_NAME,
  CHANGE_TEXT,
  CHANGE_COUNT,
  CLEAR,
  reviewFormReducer,
} from "./reviewFormHelper.js";

export const ReviewForm = () => {
  const [formState, dispatch] = useReducer(
    reviewFormReducer,
    DEFAULT_FORM_VALUE
  );

  const { name, text, count } = formState;

  const setName = (event) => {
    dispatch({ type: CHANGE_NAME, payload: event.target.value });
  };

  const setText = (event) => {
    dispatch({ type: CHANGE_TEXT, payload: event.target.value });
  };

  const changeCounter = (event) => {
    dispatch({ type: CHANGE_COUNT, payload: event.target.dataset.action });
  };
  const clearForm = () => {
    dispatch({ type: CLEAR });
  };

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
          <Counter count={count} onClickClbck={changeCounter} />
        </div>
        <button type="button" onClick={clearForm}>
          Clear
        </button>
      </div>
    </div>
  );
};
