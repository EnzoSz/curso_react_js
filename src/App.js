import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {text:'cortar cebolla', completed: false},
  {text:'llorar con la llorona', completed: true},
  {text:'hacer ejercicio', completed: false},
  {text:'estudiar programacion', completed: true}
];


function App() {
  return (
    <>
      <TodoCounter completed={16} total={25}/>
      <TodoSearch />
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem 
            key={todo.text}
            text={todo.text}
            completed ={todo.completed}
          />
          
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
