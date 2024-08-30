import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeData from "../recipeData/HomeRecipe";
import RecipeDetails from "../recipeDetails/detailsRecipe";

export const RecipeBrowser = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/recipe" element={<RecipeData />} />
          <Route path="/recipe/:id" element={<RecipeDetails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
