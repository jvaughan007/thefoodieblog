import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from '../components/EditRecipeForm';
import { recipes as recipesData } from '../mockData'; // Replace with your actual data source

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const recipeToEdit = recipesData.find((r) => r.id === parseInt(id));
    if (recipeToEdit) {
      setRecipe(recipeToEdit);
    } else {
      navigate('/'); // Redirect if the recipe is not found
    }
  }, [id, navigate]);

  const handleSave = (updatedRecipe) => {
    // Implement your update logic here, such as updating the state or making an API call
    console.log('Updated Recipe:', updatedRecipe);
    navigate('/'); // Redirect to the homepage after saving changes
  };

  if (!recipe) return <p>Loading...</p>;

  return <EditRecipeForm recipe={recipe} onSave={handleSave} />;
};

export default EditRecipe;
