import { CompleteIcon } from "./CompleteIcon.jsx";
import { DeleteIcon } from "./DeleteIcon.jsx";
import React from "react";
import "../styles/TodoItem.css";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onCompleted={props.onCompleted} />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <DeleteIcon onDelete={props.onDelete} />
    </li>
  );
}

export { TodoItem };
