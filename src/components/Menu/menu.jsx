export const Menu = ({ restaurantsList, changeActiveRest }) => {
  return (
    <div>
      {restaurantsList.map(({ id, name }) => (
        <button
          key={id}
          onClick={changeActiveRest}
          data-id={id}
          className="menu-button"
        >
          {name}
        </button>
      ))}
    </div>
  );
};
