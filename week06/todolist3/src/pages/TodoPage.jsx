import React, { useState, useRef, useEffect, useCallback } from 'react';
import TodoTemplate from '../components/TodoTemplate';
import TodoHead from '../components/TodoHead';
import TodoList from '../components/TodoList';
import TodoCreate from '../components/TodoCreate';

function TodoPage() {
  const nextId = useRef(3);

  const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, setTodos] = useState(storedTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onCreate = useCallback((text) => {
    const newTodo = {
      id: nextId.current,
      text,
      done: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }, []);

  const onUpdate = useCallback((id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  }, []);

  return (
    <TodoTemplate>
      <TodoHead todos={todos} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
        onUpdate={onUpdate}
      />
      <TodoCreate onCreate={onCreate} />
    </TodoTemplate>
  );
}

export default TodoPage;
