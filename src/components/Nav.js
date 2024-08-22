import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/"><p>The Foodie Blog 🥟</p></Link>
      </div>
      <div>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li className="recipes-menu" onClick={toggleMenu}>
          {isMenuOpen ? "▲" : "▼"} Recipes 
            {isMenuOpen && (
              <ul className="dropdown">
                <li>
                  <Link to="/recipes">All Recipes</Link>
                </li>
                <li>
                  <Link to="/recipes/add">Add Recipe</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
