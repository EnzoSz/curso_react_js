import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  // localStorage.removeItem('TODOS_V1')
// const defaultTodos = [
//   { text: "cortar cebolla", completed: false },
//   { text: "llorar con la llorona", completed: true },
//   { text: "hacer ejercicio", completed: false },
//   { text: "estudiar programacion", completed: true },
//   { text: "estudiar analisis matematico", completed: true },
// ];
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[initialValue, itemName]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
