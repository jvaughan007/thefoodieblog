// src/components/RecipeDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '../mockData';

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <h2>Recipe not found!</h2>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      {recipe.steps.map((step, index) => (
        <p key={index}>{index + 1}. {step}</p>
      ))}
    </div>
  );
};

export default RecipeDetails;
