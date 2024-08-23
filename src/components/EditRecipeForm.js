import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const EditRecipeForm = ({ recipe, onSave }) => {
  const [title, setTitle] = useState(recipe.title);
  const [author, setAuthor] = useState(recipe.author);
  const [description, setDescription] = useState(recipe.description);
  const [blog, setBlog] = useState(recipe.blog || ''); // Capture HTML content for blog
  const [steps, setSteps] = useState(recipe.steps);
  const [ingredients, setIngredients] = useState(recipe.ingredients || []); // Handle ingredients
  const [image, setImage] = useState(null); // Store new image file
  const [existingImageUrl] = useState(recipe.image); // Store URL of existing image

  const handleStepChange = (index, value) => {
    const updatedSteps = [...steps];
    updatedSteps[index] = value;
    setSteps(updatedSteps);
  };

  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  const addStep = () => {
    setSteps([...steps, '']);
  };

  // Handle adding a new ingredient input
  const addIngredient = () => {
    if (ingredients.length < 30) {
      setIngredients([...ingredients, '']);
    }
  };

  const removeStep = (index) => {
    const updatedSteps = steps.filter((_, i) => i !== index);
    setSteps(updatedSteps);
  };

  // Handle removing an ingredient input
  const removeIngredient = (index) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const handleBlogChange = (content) => {
    setBlog(content); // React Quill provides the content as HTML
  };

  const urlToFile = async (url, filename, mimeType) => {
    const response = await fetch(url);
    const blob = await response.blob();
    return new File([blob], filename, { type: mimeType });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('description', description);
    formData.append('blog', blog); // Append blog content as HTML
    formData.append('steps', JSON.stringify(steps));
    formData.append('ingredients', JSON.stringify(ingredients));

    if (image) {
      // If a new image is selected, append it
      formData.append('image', image);
    } else if (existingImageUrl) {
      // Convert the existing image URL to a File and append it
      const file = await urlToFile(existingImageUrl, 'existing-image.jpg', 'image/jpeg');
      formData.append('image', file);
    }

    onSave(formData); // Pass data to the parent component for API submission
  };

  return (
    <form onSubmit={handleSubmit} className='edit-recipe-form'>
      <h1 className='edit-recipe-form-header'>Edit Recipe</h1>
      <div className='form-group'>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>

      <div className='form-group'>
        <label>Author:</label>
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
          required 
        />
      </div>

      <div className='form-group'>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
          required
        />
      </div>

      <div className='form-group'>
        <label>Blog:</label>
        <ReactQuill value={blog} onChange={handleBlogChange} theme="snow" className='blog-input'/>
      </div>

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
      
      <div className='form-group'>
        <label>Image:</label>
        {existingImageUrl && !image && <img src={existingImageUrl} alt="Existing recipe" width="150" />}
        <input 
          type="file" 
          onChange={(e) => setImage(e.target.files[0])} 
          accept="image/*"
        />
      </div>
      <button type="submit" className='submit-button'>Save</button>
      <Link to="/" className="cancel-button">Cancel</Link>
    </form>
  );
};

export default EditRecipeForm;
