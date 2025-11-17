import { useState } from "react";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";
import "./App.css";

const App = () => {
  const availableIngredients = [
    { name: "Kaiser Bun", color: "saddlebrown" },
    { name: "Sesame Bun", color: "sandybrown" },
    { name: "Gluten Free Bun", color: "peru" },
    { name: "Lettuce Wrap", color: "olivedrab" },
    { name: "Beef Patty", color: "#3F250B" },
    { name: "Soy Patty", color: "#3F250B" },
    { name: "Black Bean Patty", color: "#3F250B" },
    { name: "Chicken Patty", color: "burlywood" },
    { name: "Lettuce", color: "lawngreen" },
    { name: "Tomato", color: "tomato" },
    { name: "Bacon", color: "maroon" },
    { name: "Onion", color: "lightyellow" },
    { name: "Cheddar Cheese", color: "#FDE18B" },
    { name: "Swiss Cheese", color: "#F1E1A8" },
  ];

  const [stack, setStack] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const hasBun = stack.some((item) => {
    const lower = item.name.toLowerCase();
    return lower.includes("bun") || lower.includes("lettuce wrap");
  });
// wanted to add this feature so peple cant choose more than one bun or lettuce wrap because thats also considered a bun

  const addToBurger = (ingredient) => {
    const lower = ingredient.name.toLowerCase();
    const isBun = lower.includes("bun") || lower.includes("lettuce wrap");

    if (isBun && hasBun) {
      setErrorMessage("You already added a bun!");
      return;
    }

    setErrorMessage("");
    setStack((prev) => [...prev, ingredient]);
  };

  const removeFromBurger = (indexToRemove) => {
    setStack((prev) => prev.filter((_, i) => i !== indexToRemove));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>

      {errorMessage && (
        <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
      )}

      <section style={{ display: "flex", gap: "2rem" }}>
        <IngredientList
          ingredients={availableIngredients}
          addToBurger={addToBurger}
        />

        <BurgerStack
          ingredients={stack}
          removeFromBurger={removeFromBurger}
        />
      </section>
    </main>
  );
};

export default App;

