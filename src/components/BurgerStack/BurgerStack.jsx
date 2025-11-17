import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <>
      {props.ingredients.length === 0 && <p>No Ingredients</p>}

      <ul>
        {props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onRemove={() => props.removeFromBurger(index)}
          />
        ))}
      </ul>
    </>
  );
};

export default BurgerStack;
