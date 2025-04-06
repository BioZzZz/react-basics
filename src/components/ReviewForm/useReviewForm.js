import { useReducer, useCallback } from "react";
import {
  DEFAULT_FORM_VALUE,
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

  const setText = useCallback((event) => {
    dispatch({ type: CHANGE_TEXT, payload: event.target.value });
  }, []);

  const changeCounter = useCallback((event) => {
    dispatch({ type: CHANGE_COUNT, payload: event.target.dataset.action });
  }, []);
  const clearForm = useCallback(() => {
    dispatch({ type: CLEAR });
  }, []);

  return { name, text, count, setText, changeCounter, clearForm };
};
