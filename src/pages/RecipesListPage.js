import React from 'react';
import RecipeList from '../components/RecipeList';

const RecipesListPage = ({ recipes }) => {
    return (
        <div className='recipes-list-container'>
            <RecipeList recipes={recipes} />
        </div>
    );
};

export default RecipesListPage;