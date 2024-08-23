import React from 'react';

const DeleteButton = ({ onDelete }) => {
  

  return (
    <button className="delete-button" onClick={onDelete}>
      Delete
    </button>
  );
};

export default DeleteButton;
