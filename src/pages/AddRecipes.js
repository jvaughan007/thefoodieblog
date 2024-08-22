import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipes = () => {
  const [dishName, setDishName] = useState('');
  const [foodieName, setFoodieName] = useState('');
  const [description, setDescription] = useState('');
  const [steps, setSteps] = useState(['']); // Start with 1 empty steps
  const [image, setImage] = useState(null);

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

  // Handle image upload
  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Convert description to paragraphs (array)
    const descriptionArray = description.split('\n').filter((para) => para.trim() !== '');

    // Prepare the recipe data
    const recipeData = {
      dishName,
      foodieName,
      description: descriptionArray,
      steps: steps.filter((step) => step.trim() !== ''), // Filter out empty steps
      image, // Handle image separately when integrating with the backend
    };

    // Here, handle whatever needs to be done with the recipe data
    console.log('Submitted Recipe:', recipeData);

    // Optionally, reset the form or navigate to another page
    // Resetting form fields
    setDishName('');
    setFoodieName('');
    setDescription('');
    setSteps(['']);
    setImage(null);
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
