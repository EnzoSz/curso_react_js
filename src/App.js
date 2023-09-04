import React from "react";
import { AppUI } from "./components/AppUI";
import { TodoProvider } from "./context/TodoContext";

function App() {
  /* Efectos en React */
  // console.log('Log 1');
  // React.useEffect( () =>{
  //   console.log('Looooog 2');
  // })
  // React.useEffect( () =>{
  //   console.log('Looooog 2');
  // },[]);
  // React.useEffect( () =>{
  //   console.log('Looooog 2');
  // },[searchValue]);
  // console.log('Log 3');

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
    // loading={loading}
    // error={error}
    // completedTodos = {completedTodos}
    // totalTodos= {totalTodos}
    // searchValue= {searchValue}
    // setSearchValue= {setSearchValue}
    // searchedTodos= {searchedTodos}
    // completeTodo = {completeTodo}
    // deleteTodo= {deleteTodo}
  );
}

export default App;
