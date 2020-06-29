import React, { useEffect } from "react";
import "./App.css";
import Button from "./components/Button";
import RecipeForm from "./containers/RecipeForm";
import RecipesButtonList from "./containers/RecipesButtonList";
import "bootstrap/dist/css/bootstrap.css";
import Welcome from "./components/Welcome";
import Recipes from "./containers/Recipes";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import SingleRecipe from "./containers/SingleRecipe";
import { createBrowserHistory } from "history";

function App({ deleteAllRecipes, fetchErrorMessage, fetchRecipes, recipes }) {
  const history = createBrowserHistory();
  console.log(history);
  useEffect(() => {
    fetchRecipes();
  }, []);

  useEffect(() => {
    if (fetchErrorMessage) {
      alert({ fetchErrorMessage });
    }
  }, [fetchErrorMessage]);

  function onDelete() {
    let currentUrl = "/" + window.location.href.split("/").reverse()[0];
    console.log(currentUrl);
    if (window.confirm("Are you sure?")) {
      deleteAllRecipes();
    } else {
      history.push(currentUrl);
    }
  }
  return (
    <Router history={history}>
      <div className="App">
        <div className="sidebar">
          <h1 className="sidebar__title">
            Recipes BOX<i className="fas fa-drumstick-bite"></i>
          </h1>

          <div className="button__bar">
            <Link to="/add">
              <Button title={"Add a New Recipe"} styleName={"button__add"} />
            </Link>

            <Link to="/show">
              <Button title={"Show All Recipes"} styleName={"button__show"} />
            </Link>

            <Link to="/">
              <Button
                onClick={onDelete}
                title={"Remove All Recipes"}
                styleName={"button__remove"}
              />
            </Link>
          </div>

          <h2 className="sidebar__list">
            {recipes.length ? "Recipe List" : null}
          </h2>
          <RecipesButtonList />
        </div>

        <div className="main">
          <Switch>
            <Route exact path="/" component={Welcome} />

            <Route exact path={"/recipe/:id"}>
              <SingleRecipe />
            </Route>

            <Route path={"/recipe/edit/:id"} component={RecipeForm} />

            <Route path="/add" component={RecipeForm} />

            <Route path="/show">
              <Recipes />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
