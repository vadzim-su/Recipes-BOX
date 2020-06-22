import React from "react";
import { useState } from "react";

function RecipeForm({ recipe, onSubmit }) {
  const [recipeData, setData] = useState({
    ...recipe,
    steps: recipe.steps.join("\n"),
  });

  const handleInputChange = (e) => {
    setData({
      ...recipeData,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  function submitForm(e) {
    e.preventDefault();
    onSubmit({ ...recipeData, steps: recipeData.steps.split("\n") });
    setData({
      name: "",
      url: "",
      steps: "",
    });
  }
  return (
    <form className="form" onSubmit={submitForm}>
      <div className="form__wrapper">
        <div className="form-group">
          <input
            value={recipeData.name}
            name="name"
            type="text"
            className="form-control"
            placeholder="Recipe name"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <input
            value={recipeData.url}
            name="url"
            type="text"
            className="form-control"
            placeholder="Recipe image URL"
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            value={recipeData.steps}
            name="steps"
            className="form-control"
            placeholder="Ingredients"
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <div className="button__submit"></div>
        <button type="submit" className="btn btn-primary">
          OK
        </button>

        <button type="button" className="btn btn-warning">
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
