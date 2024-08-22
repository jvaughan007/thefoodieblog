import React, { useState, useEffect } from 'react';

const EditRecipeForm = ({ recipe, onSave }) => {
  const [title, setTitle] = useState(recipe.title);
  const [author, setAuthor] = useState(recipe.author);
  const [description, setDescription] = useState(recipe.description);
  const [steps, setSteps] = useState(recipe.steps);
  const [image, setImage] = useState(recipe.image);

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const handleAddStep = () => {
    if (steps.length < 30) {
      setSteps([...steps, '']);
    }
  };

  const handleRemoveStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedRecipe = {
      ...recipe,
      title,
      author,
      description,
      steps,
      image,
    };
    onSave(updatedRecipe); // Call the onSave function to update the recipe
  };

  return (
    <div className="edit-recipe-form-container">
      <form className="edit-recipe-form" onSubmit={handleSubmit}>
        <h2>Edit Recipe</h2>

        <div className="form-group">
          <label>Name of Dish:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Foodie Name:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Steps:</label>
          {steps.map((step, index) => (
            <div key={index} className="step">
              <input
                type="text"
                value={step}
                onChange={(e) => handleStepChange(index, e.target.value)}
              />
              {steps.length > 1 && (
                <button type="button" onClick={() => handleRemoveStep(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          {steps.length < 30 && (
            <button type="button" onClick={handleAddStep}>
              Add Step
            </button>
          )}
        </div>

        <div className="form-group">
          <label>Upload Image:</label>
          <input
            type="file"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </div>

        <div className="button-group">
          <button type="submit" className="save-button">
            Save Changes
          </button>
          <button type="button" className="cancel-button" onClick={() => window.history.back()}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipeForm;
