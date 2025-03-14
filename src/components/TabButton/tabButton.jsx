export const TabButton = ({ id, name, callbackFunc, disabledId }) => {
  return (
    <button
      onClick={callbackFunc}
      data-id={id}
      className="menu-button"
      disabled={id === disabledId}
    >
      {name}
    </button>
  );
};
