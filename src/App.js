import React from "react";
import { AppUI } from "./components/AppUI";
import { useLocalStorage } from "./hooks/useLocalStorage";
// const defaultTodos = [
//   { text: "cortar cebolla", completed: false },
//   { text: "llorar con la llorona", completed: true },
//   { text: "hacer ejercicio", completed: false },
//   { text: "estudiar programacion", completed: true },
//   { text: "estudiar analisis matematico", completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')


function App() {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  /* Efectos en React */
  console.log('Log 1');
  // React.useEffect( () =>{
  //   console.log('Looooog 2'); 
  // })
  // React.useEffect( () =>{
  //   console.log('Looooog 2'); 
  // },[]);
  React.useEffect( () =>{
    console.log('Looooog 2'); 
  },[searchValue]);
  console.log('Log 3');

  const searchedTodos = todos.filter((todo) => {
    const todoText = todo.text.toLowerCase(); //convierto el texto en minisculas
    const searchText = searchValue.toLowerCase();

    return todoText.includes(searchText);
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

 return (
  <AppUI 
  completedTodos = {completedTodos}
  totalTodos= {totalTodos}
  searchValue= {searchValue}
  setSearchValue= {setSearchValue}
  searchedTodos= {searchedTodos}
  completeTodo = {completeTodo}
  deleteTodo= {deleteTodo}
  />
 );
}

export default App;
