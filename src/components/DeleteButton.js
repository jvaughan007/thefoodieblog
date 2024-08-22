import React from 'react';

const DeleteButton = ({ onDelete, recipeTitle }) => {
  const handleDelete = () => {
    if (window.confirm(`Are you sure you want to delete ${recipeTitle}?`)) {
      onDelete();
    }
  };

  return (
    <button className="delete-button" onClick={handleDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
