import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../context/TodoContext";

function TodoSearch() {
  const { searchValue,setSearchValue } = React.useContext(TodoContext);

  return (
    <input
      className="TodoSearch"
      placeholder="Cortar cebolla"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
