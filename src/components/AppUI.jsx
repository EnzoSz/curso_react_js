import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import "../styles/TodoCounter.css";
function AppUI ({
    loading, 
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}){
    return (
        <>
          <TodoCounter total={totalTodos} completed={completedTodos} />
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
          <TodoList>
            {loading && <p>Estamos cargando...</p>}
            {error && <p>Desesperate, hubo un error!!</p>}
            {(!loading && searchedTodos.length ===0 ) && <p>¡Crea tu primer TODO!</p> }
            {searchedTodos.map((todo) => (
              <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onCompleted={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo.text)}
              />
            ))}
          </TodoList>
          <CreateTodoButton />
        </>
      );
}

export { AppUI };