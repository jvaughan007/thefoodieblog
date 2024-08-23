import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipeById, updateRecipe } from '../api/recipeService'; // Assuming the correct path
import EditRecipeForm from '../components/EditRecipeForm';

const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data when the component loads
    const fetchRecipe = async () => {
      try {
        const fetchedRecipe = await getRecipeById(id);
        setRecipe(fetchedRecipe);
      } catch (error) {
        console.error('Error fetching recipe:', error);
      }
    };
    fetchRecipe();
  }, [id]); // Dependency array includes `id` to re-fetch if the ID changes

  const handleSave = async (formData) => {
    try {
      await updateRecipe(id, formData); // Assuming `updateRecipe` handles the PUT request
      // After successful update, fetch the updated data
      const updatedRecipe = await getRecipeById(id);
      setRecipe(updatedRecipe);
      // Redirect to the updated recipe's detail page
      navigate(`/recipe/${id}`);
    } catch (error) {
      console.error('Error updating recipe:', error);
    }
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div className='edit-recipe-page'>
      <div className='edit-recipe-page-form-container'>
      <EditRecipeForm recipe={recipe} onSave={handleSave} />
      </div>
    </div>
  );
};

export default EditRecipe;
