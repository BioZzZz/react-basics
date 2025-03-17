import { useReducer, useCallback } from "react";
import {
  DEFAULT_FORM_VALUE,
  CHANGE_NAME,
  CHANGE_TEXT,
  CHANGE_COUNT,
  CLEAR,
  reviewFormReducer,
} from "./reviewFormHelper.js";

export const useReviewForm = () => {
  const [formState, dispatch] = useReducer(
    reviewFormReducer,
    DEFAULT_FORM_VALUE
  );

  const { name, text, count } = formState;

  const setName = useCallback(
    (event) => {
      dispatch({ type: CHANGE_NAME, payload: event.target.value });
    },
    [CHANGE_NAME]
  );

  const setText = useCallback(
    (event) => {
      dispatch({ type: CHANGE_TEXT, payload: event.target.value });
    },
    [CHANGE_TEXT]
  );

  const changeCounter = useCallback(
    (event) => {
      dispatch({ type: CHANGE_COUNT, payload: event.target.dataset.action });
    },
    [CHANGE_COUNT]
  );
  const clearForm = useCallback(() => {
    dispatch({ type: CLEAR });
  }, [CLEAR]);

  return { name, text, count, setName, setText, changeCounter, clearForm };
};
