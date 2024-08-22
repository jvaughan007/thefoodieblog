import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import LandingPage from './pages/LandingPage';
import Nav from './components/Nav';
import AddRecipes from './pages/AddRecipes';
import EditRecipe from './pages/EditRecipe';
import { recipes } from './mockData';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<LandingPage recipes={recipes}/> } />
          <Route path="/recipes" element={<RecipeList recipes={recipes}/>} />
          <Route path="/recipes/add" element={<AddRecipes />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit-recipe/:id" element={<EditRecipe />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

