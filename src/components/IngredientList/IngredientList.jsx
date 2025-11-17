import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onAdd={() => props.addToBurger(ingredient)}
        />
      ))}
    </ul>
  );
};

export default IngredientList;

