import React, { useEffect, useState } from "react";
import RecipeList from "../components/RecipeList";
import { getRecipes } from "../api";
import { Link } from "react-router-dom";

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

    // Filter to get the three most recent recipes
    const latestRecipes = recipes.slice(-3).reverse(); // Reverse to get the latest first

    return (
        <div className="landing-page">
            <div className="welcome">
                <h1>Welcome to The Foodie Blog!</h1>
            </div>
            <div className="featured">
                <h1>Check out our latest recipes!</h1>
                <RecipeList recipes={latestRecipes} />
                <div className="view-all-recipes-link">
                    <Link to="/recipes">See all of our recipes</Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
