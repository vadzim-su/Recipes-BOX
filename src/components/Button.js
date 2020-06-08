import React from "react";

function Button({ title, styleName, deleteAllRecipes }) {
  // function clearRecipesField(e) {
  //   e.preventDefault();
  //   deleteAllRecipes();
  // }

  return (
    <div>
      <button
        className={styleName}
        // onClick={title === "Remove All Recipes" ? clearRecipesField : null}
      >
        {title}
      </button>
    </div>
  );
}

export default Button;
