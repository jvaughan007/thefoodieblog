import React from "react";
import RecipeList from "../components/RecipeList";


const LandingPage = ({ recipes }) => {
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