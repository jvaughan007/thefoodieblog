import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipesListPage from './pages/RecipesListPage';
import RecipeDetails from './pages/RecipeDetails';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import AddRecipes from './pages/AddRecipes';
import EditRecipe from './pages/EditRecipe';
import { getRecipes } from './api';

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await getRecipes(); // Fetch recipes from your backend
        setRecipes(response);
      } catch (error) {
        console.error("Failed to fetch recipes:", error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/recipes" element={<RecipesListPage recipes={recipes}/>} />
          <Route path="/recipes/add" element={<AddRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


