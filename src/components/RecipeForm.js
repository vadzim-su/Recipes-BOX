import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function RecipeForm({ recipe, onSubmit, types }) {
  const history = useHistory();
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

    if (
      recipeData.name &&
      recipeData.url &&
      recipeData.steps &&
      recipeData.type
    ) {
      onSubmit({ ...recipeData, steps: recipeData.steps.split("\n") });
      setData({
        name: "",
        url: "",
        steps: "",
        type: "",
      });
      history.push("/show");
    }
  }

  function cancelForm(e) {
    e.preventDefault();
    setData({
      name: "",
      url: "",
      steps: "",
      type: "",
    });
    history.push("/show");
  }

  return (
    <form className="form">
      <div className="form__wrapper">
        <div className="form-group">
          <input
            value={recipeData.name}
            name="name"
            type="text"
            className="form-control"
            placeholder="Recipe name"
            onChange={handleInputChange}
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
          />
        </div>

        <div className="form-group">
          <textarea
            value={recipeData.steps}
            name="steps"
            className="form-control"
            placeholder="Ingredients"
            onChange={handleInputChange}
          ></textarea>
        </div>

        {/* <select
          className="form-group"
          onChange={handleInputChange}
          name="type"
          value={recipeData.type}
        >
          <option value="" hidden disabled selected>
            Choose the type of dish
          </option>
          {Object.values(types).map((type, id) => (
            <option key={id}>{type}</option>
          ))}
        </select> */}

        <div className="button__submit"></div>
        <button type="submit" className="btn btn-primary" onClick={submitForm}>
          OK
        </button>

        <button type="button" className="btn btn-warning" onClick={cancelForm}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default RecipeForm;
