import React from 'react';
import { Link } from 'react-router-dom';

const EditButton = ({ recipeId }) => {
  return (
    <Link to={`/edit-recipe/${recipeId}`} className="edit-button">
      Edit
    </Link>
  );
};

export default EditButton;
