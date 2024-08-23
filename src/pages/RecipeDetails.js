import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeById } from '../api/recipeService';

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const fetchedRecipe = await getRecipeById(id);
        setRecipe(fetchedRecipe);
      } catch (err) {
        setError('Recipe not found!');
      }
    };

    fetchRecipe();
  }, [id]);

  if (error) {
    return <h2>{error}</h2>;
  }

  if (!recipe) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="recipe-container">
      <h2>{recipe.title}</h2>
      <h4>Foodie: {recipe.author}</h4>
      <img src={recipe.image} alt={recipe.title} />

      <div className="blog-section">
        {/* Render the blog content as HTML */}
        <div dangerouslySetInnerHTML={{ __html: recipe.blog }} />
      </div>

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
