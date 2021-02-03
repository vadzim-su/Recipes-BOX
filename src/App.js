import React, { useEffect } from "react";
import "./App.css";
import RecipeForm from "./containers/RecipeForm";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./components/Welcome";
import Recipes from "./containers/Recipes";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import SingleRecipe from "./containers/SingleRecipe";
import Sidebar from "./components/Sidebar";

function App({
  deleteAllRecipes,
  fetchErrorMessage,
  fetchRecipes,
  recipes,
  getRecipesTypes,
}) {
  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    getRecipesTypes();
  }, []);

  useEffect(() => {
    if (fetchErrorMessage) {
      alert({ fetchErrorMessage });
    }
  }, [fetchErrorMessage]);

  return (
    <Router>
      <div className="App">
        <Sidebar recipes={recipes} deleteAllRecipes={deleteAllRecipes} />

        <div className="main">
          <Switch>
            <Route exact path="/" component={Welcome} />

            <Route exact path={"/recipe/:id"} component={SingleRecipe} />

            <Route path={"/recipe/edit/:id"} component={RecipeForm} />

            <Route path="/add" component={RecipeForm} />

            <Route path="/show" component={Recipes} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
