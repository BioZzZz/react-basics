export const TabButton = ({ id, name, callbackFunc }) => {
  return (
    <button onClick={callbackFunc} data-id={id} className="menu-button">
      {name}
    </button>
  );
};
