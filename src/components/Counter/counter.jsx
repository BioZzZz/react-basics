export const Counter = ({ count, onClickCallback }) => {
  return (
    <div>
      <button onClick={onClickCallback} data-action={"increment"}>
        +
      </button>
      {count}
      <button onClick={onClickCallback} data-action={"decrement"}>
        -
      </button>
    </div>
  );
};
