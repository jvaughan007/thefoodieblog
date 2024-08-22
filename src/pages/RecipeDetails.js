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
    <div className="recipe-container">
      <h2>{recipe.title}</h2>
      <h4>Foodie: {recipe.author}</h4>
      <img src={recipe.image} alt={recipe.title} />
      
      <div className="ingredients-section">
        <h3>Ingredients:</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      <div className="steps-section">
        <h3>Instructions:</h3>
        <ol>
          {recipe.steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetails;
