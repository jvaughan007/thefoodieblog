import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} className="card-image"/>
            <div className="recipe-details">
                <h3>{recipe.title}</h3>
                <p className="author">Foodie: {recipe.author}</p>
                <p className="description">{recipe.description}</p>
            </div>
            <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
        </div>
    );
};


export default RecipeCard;