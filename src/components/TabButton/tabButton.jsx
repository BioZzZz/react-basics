export const TabButton = ({ id, name, callbackFunc }) => {
  return (
    <button
      key={id}
      onClick={callbackFunc}
      data-id={id}
      className="menu-button"
    >
      {name}
    </button>
  );
};
