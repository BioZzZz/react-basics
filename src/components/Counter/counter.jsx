export const Counter = ({ count, onClickClbck }) => {
  return (
    <div>
      <button onClick={onClickClbck} data-action={"increment"}>
        +
      </button>
      {count}
      <button onClick={onClickClbck} data-action={"decrement"}>
        -
      </button>
    </div>
  );
};
