import React from "react";
import "../styles/TodoCounter.css";

function TodoCounter({ total, completed }) {
  const allTodosCompleted = total > 0 && total === completed; //funcion para mostrar el mensaje que se completaron todas las tareras, RETO
  return (
    <h1 className="TodoCounter">
      {allTodosCompleted ? (
        <span>¡Felicidades, has completado todas las tareas!</span>
      ) : (
        <>
          Has completado <span>{completed}</span> de <span>{total}</span> TODOs
        </>
      )}
    </h1>
  );
}

export { TodoCounter };
