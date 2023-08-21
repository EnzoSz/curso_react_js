//rafce: atajo para crear la esctructura basica de un componente

import React from "react";
import { TodoIcon } from "./TodoIcon.js";
function DeleteIcon({ onDelete }) {
  return (
    <TodoIcon 
      type="delete"
      color="gray"
      onClick= {onDelete}
    />
  );
}

export { DeleteIcon };
