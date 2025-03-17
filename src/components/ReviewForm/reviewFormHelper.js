export const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  count: 1,
};

export const CHANGE_NAME = "CHANGE_NAME";
export const CHANGE_TEXT = "CHANGE_TEXT";
export const CHANGE_COUNT = "CHANGE_COUNT";
export const CLEAR = "CLEAR";

const COUNTER_MIN = 1;
const COUNTER_MAX = 5;

export const reviewFormReducer = (oldState, { type, payload }) => {
  switch (type) {
    case CHANGE_NAME:
      return {
        ...oldState,
        name: payload,
      };
    case CHANGE_TEXT:
      return {
        ...oldState,
        text: payload,
      };
    case CHANGE_COUNT:
      return {
        ...oldState,
        count:
          payload === "increment"
            ? Math.min(COUNTER_MAX, oldState.count + 1)
            : Math.max(COUNTER_MIN, oldState.count - 1),
      };
    case CLEAR:
      return {
        ...DEFAULT_FORM_VALUE,
      };
    default:
      return oldState;
  }
};
