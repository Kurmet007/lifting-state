
const Ingredient = ({ ingredient, onAdd, onRemove }) => {
  return (
    <li
      style={{
        backgroundColor: ingredient.color,
        padding: "8px",
        marginBottom: "6px",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "4px"
      }}
    >
      {ingredient.name}

      {onAdd && (
        <button onClick={onAdd} style={{ marginLeft: "10px" }}>
          +
        </button>
      )}

      {onRemove && (
        <button onClick={onRemove} style={{ marginLeft: "10px" }}>
          X
        </button>
      )}
    </li>
  );
};

export default Ingredient;