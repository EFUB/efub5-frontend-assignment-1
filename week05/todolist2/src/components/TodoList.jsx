//TodoList.jsx
import React, { useCallback } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
`;
// 기존 코드 
/*
function TodoList({ todos, setTodos }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          done={todo.done}
          setTodos={setTodos}
          key={todo.id}
        />
      ))}
    </TodoListBlock>
  );
}
*/

function TodoList({ todos, setTodos }) {
  const onToggle = useCallback((id) => {
    setTodos((prev) => {
      prev.map((todo) => 
        todo.id === id ? {...todo, done: !todo.done} : todo
    )
    });
  }, [setTodos]);

  const onRemove = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, [setTodos]);

  const onEdit = useCallback((id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => 
        todo.id === id ? {...todo, text: newText} : todo
      )
    );
  }, [setTodos]);

  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          onToggle={onToggle}
          onRemove={onRemove}
          onEdit={onEdit}
        />
      ))}
    </TodoListBlock>
  );
}
export default TodoList;