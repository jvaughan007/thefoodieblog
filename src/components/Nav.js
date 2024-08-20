import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="nav">
            <div className="logo">
                <Link to='/'><p>The Foodie Blog 🥟</p></Link>
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Recipes</li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;