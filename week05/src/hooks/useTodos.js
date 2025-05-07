// src/hooks/useTodos.js
import { useState, useEffect, useCallback } from "react";

const useTodos = () => {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const updateTodos = useCallback((newTodos) => {
    setTodos(newTodos);
  }, []);

  return [todos, updateTodos];
};

export default useTodos;