//App.jsx
import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";
import useTodos from "./hooks/useTodos";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  const [todos, setTodos] = useTodos(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const [tempState, setTempState] = useState(0);

  const handleTempStateChange = () => {
    setTempState((prev) => prev + 1);
  };

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <TodoCreate todos={todos} setTodos={setTodos} />
        <button onClick={handleTempStateChange}>임시 상태 변경 ({tempState})</button>
      </TodoTemplate>
    </>
  );
}

export default App;