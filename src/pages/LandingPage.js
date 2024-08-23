import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../api";

const LandingPage = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const data = await getRecipes();
                setRecipes(data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div className="landing-page">
            <div className="welcome">
                <h1>Welcome to The Foodie Blog!</h1>
            </div>
            <div className="featured">
                <h1>Check out our latest recipes!</h1>
                <RecipeList recipes={recipes}/>
            </div>
        </div>
    );
};


export default LandingPage