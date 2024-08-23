import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createRecipe } from '../api';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill's CSS

const AddRecipes = () => {
  const [dishName, setDishName] = useState('');
  const [foodieName, setFoodieName] = useState('');
  const [description, setDescription] = useState('');
  const [blog, setBlog] = useState(''); // New state for blog using HTML content
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

  // Handle removing a step input
  const removeStep = (index) => {
    setSteps(steps.filter((_, i) => i !== index));
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

  // Handle removing an ingredient input
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
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

    // Convert description to a single string with a max of 120 characters
    const trimmedDescription = description.substring(0, 120);

    // Prepare the recipe data
    const recipeData = new FormData();
    recipeData.append('title', dishName);
    recipeData.append('author', foodieName);
    recipeData.append('description', trimmedDescription);
    recipeData.append('blog', blog); // Send the blog as HTML content
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
          <label htmlFor="description">Description (Max 120 characters)</label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength="120"
            required
          />
        </div>

        {/* Blog */}
        <div className="form-group">
          <label htmlFor="blog">Blog</label>
          <ReactQuill
            value={blog}
            onChange={setBlog} // React Quill provides the content as HTML
            theme="snow"
          />
        </div>

        {/* Ingredients */}
        <div className="form-group">
          <label>Ingredients</label>
          {ingredients.map((ingredient, index) => (
            <div key={index} className="ingredient-input">
              <input
                type="text"
                placeholder={`Ingredient ${index + 1}`}
                value={ingredient}
                onChange={(e) => handleIngredientChange(index, e.target.value)}
                required
                className='ingredient'
              />
              <button type="button" className='ingredient-button' onClick={() => removeIngredient(index)}>
                Remove
              </button>
            </div>
          ))}
          <div className="ingredient-buttons">
            {ingredients.length < 30 && (
              <button type="button" className='ingredient-button' onClick={addIngredient}>
                + Ingredient
              </button>
            )}
          </div>
        </div>

        {/* Steps */}
        <div className="form-group">
          <label>Steps</label>
          {steps.map((step, index) => (
            <div key={index} className="step-input">
              <input
                type="text"
                placeholder={`Step ${index + 1}`}
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
                required
                className='step'
              />
              <button type="button" className='step-button' onClick={() => removeStep(index)}>
                Remove
              </button>
            </div>
          ))}
          <div className="step-buttons">
            {steps.length < 30 && (
              <button type="button" className='step-button' onClick={addStep}>
                + Step
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

