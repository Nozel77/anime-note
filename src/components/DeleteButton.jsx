import React from "react";

const DeleteButton = ({ id, onDelete }) => {
  return (
    <button className="data-item_delete" onClick={() => onDelete(id)}>
      X
    </button>
  );
}

export default DeleteButton;
