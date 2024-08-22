import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

const RecipeCard = ({ recipe, onDelete }) => {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="card-image" />
      <div className="recipe-details">
        <h3>{recipe.title}</h3>
        <p className="author">Foodie: {recipe.author}</p>
        <p className="description">{recipe.description}</p>
      </div>
      <Link to={`/recipe/${recipe.id}`} className="view-recipe-link">View Recipe</Link>
      <div className="button-group">
        <EditButton recipeId={recipe.id} />
        <DeleteButton onDelete={() => onDelete(recipe.id)} recipeTitle={recipe.title} />
      </div>
    </div>
  );
};

export default RecipeCard;
