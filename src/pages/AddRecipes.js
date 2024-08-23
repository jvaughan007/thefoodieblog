import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createRecipe } from '../api';

const AddRecipes = () => {
  const [dishName, setDishName] = useState('');
  const [foodieName, setFoodieName] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState(['']); // Start with 1 empty step
  const [ingredients, setIngredients] = useState(['']); // Start with 1 empty ingredient
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  // Handle adding a new step input
  const addStep = () => {
    if (steps.length < 30) {
      setSteps([...steps, '']);
    }
  };

  // Handle removing the last step input
  const removeStep = () => {
    if (steps.length > 1) {
      setSteps(steps.slice(0, -1));
    }
  };

  // Handle changing a step input
  const handleStepChange = (index, value) => {
    const newSteps = [...steps];
    newSteps[index] = value;
    setSteps(newSteps);
  };

  // Handle adding a new ingredient input
  const addIngredient = () => {
    if (ingredients.length < 30) {
      setIngredients([...ingredients, '']);
    }
  };

  // Handle removing the last ingredient input
  const removeIngredient = () => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.slice(0, -1));
    }
  };

  // Handle changing an ingredient input
  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients];
    newIngredients[index] = value;
    setIngredients(newIngredients);
  };

  // Handle image upload
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Convert description to paragraphs (array)
    const descriptionArray = description.split('\n').filter((para) => para.trim() !== '');
    console.log(JSON.stringify(descriptionArray));
    // Prepare the recipe data
    const recipeData = new FormData();
    recipeData.append('title', dishName);
    recipeData.append('author', foodieName);
    recipeData.append('description', JSON.stringify(descriptionArray));
    recipeData.append('steps', JSON.stringify(steps.filter((step) => step.trim() !== '')));
    recipeData.append('ingredients', JSON.stringify(ingredients.filter((ingredient) => ingredient.trim() !== '')));
    recipeData.append('image', image);

    try {
      await createRecipe(recipeData); // Call API to create recipe
      navigate('/'); // Redirect to home page after successful submission
    } catch (error) {
      console.error('Failed to create recipe:', error);
    }
  };

  return (
    <div className='add-recipe-form-container'>
      <form onSubmit={handleSubmit} className="add-recipe-form">
        {/* Name of Dish */}
        <div className="form-group">
          <label htmlFor="dishName">Name of Dish</label>
          <input
            type="text"
            id="dishName"
            value={dishName}
            onChange={(e) => setDishName(e.target.value)}
            required
          />
        </div>

        {/* Foodie Name */}
        <div className="form-group">
          <label htmlFor="foodieName">Foodie Name</label>
          <input
            type="text"
            id="foodieName"
            value={foodieName}
            onChange={(e) => setFoodieName(e.target.value)}
            required
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="5"
            required
          />
        </div>

        {/* Ingredients */}
        <div className="form-group">
          <label>Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Ingredient ${index + 1}`}
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              required
              className='ingredient'
            />
          ))}
          <div className="ingredient-buttons">
            {ingredients.length < 30 && (
              <button type="button" className='ingredient-button' onClick={addIngredient}>
                Add Ingredient
              </button>
            )}
            {ingredients.length > 1 && (
              <button type="button" className='ingredient-button' onClick={removeIngredient}>
                Remove Last Ingredient
              </button>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="form-group">
          <label>Steps</label>
          {steps.map((step, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Step ${index + 1}`}
              value={step}
              onChange={(e) => handleStepChange(index, e.target.value)}
              required
              className='step'
            />
          ))}
          <div className="step-buttons">
            {steps.length < 30 && (
              <button type="button" className='step-button' onClick={addStep}>
                Add Step
              </button>
            )}
            {steps.length > 1 && (
              <button type="button" className='step-button' onClick={removeStep}>
                Remove Last Step
              </button>
            )}
          </div>
        </div>

        {/* Image Upload */}
        <div className="form-group">
          <label htmlFor="image">Upload Image</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            required
          />
        </div>

        <div className="button-group">
          {/* Add Recipe Button */}
          <button type="submit" className="add-recipe-button">Submit</button>

          {/* Cancel Button */}
          <Link to="/" className="cancel-button">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default AddRecipes;

