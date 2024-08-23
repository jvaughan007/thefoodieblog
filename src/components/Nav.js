import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="nav">
      <div className="logo">
        <Link to="/"><p>The Foodie Blog 🥟</p></Link>
      </div>
      <div>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <li className="recipes-menu" onClick={toggleMenu} ref={menuRef}>
            {isMenuOpen ? "▼ Recipes" : "▲ Recipes"}
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
