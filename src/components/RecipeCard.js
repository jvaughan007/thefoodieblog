import React from "react";
import { Link } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { deleteRecipe } from "../api";

const RecipeCard = ({ recipe }) => {

  const handleDelete = async () => {
    try {
        await deleteRecipe(recipe.id);
        // You may want to trigger a state update in the parent component to refresh the list.
        window.location.reload(); // This is a basic approach to trigger a refresh.
    } catch (error) {
        console.error("Error deleting the recipe:", error);
    }
};

  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.title} className="card-image" />
      <div className="recipe-details">
        <h3>{recipe.title}</h3>
        <p className="author">Foodie: {recipe.author}</p>
          <p className="description">{recipe.description}</p>
      </div>
      <div className="button-group">
        <Link to={`/recipe/${recipe.id}`} className="view-recipe-link">View</Link>
        <EditButton recipeId={recipe.id} />
        <DeleteButton onDelete={() => handleDelete(recipe.id)} recipeTitle={recipe.title} />
      </div>
    </div>
  );
};

export default RecipeCard;
