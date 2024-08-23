import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;


// Get all recipes
export const getRecipes = async () => {
    try {
        const response = await axios.get(`${API_URL}/recipes/`);
        return response.data;
    } catch (error) {
        console.log('Error fetching recipes: ', error);
        throw error;
    }
};

// Get a specific recipe by its ID
export const getRecipeById = async (id) => {
    try {
        console.log(`Axios request: ${API_URL}/recipes/${id}`);
        const response = await axios.get(`${API_URL}/recipes/${id}/`);
        return response.data;
    } catch (error) {
        console.log(`API URL: ${API_URL}`);
        console.log(`Axios request: ${API_URL}/recipes/${id}`);
        console.log('Error fetching recipes: ', error);
        throw error;
    }
};

// Create a new recipe
export const createRecipe = async (recipeData) => {
    try {
        const response = await axios.post(`${API_URL}/recipes/`, recipeData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error creating recipe: ', error);
        throw error;
    }
};

// Update/edit an existing recipe
export const updateRecipe = async (id, recipeData) => {
    try {
        const response = await axios.put(`${API_URL}/recipes/${id}/`, recipeData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error updating recipe:', error);
        throw error;
    }
};

// Delete a recipe
export const deleteRecipe = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/recipes/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error deleting recipe: ', error);
        throw error;
    }
};