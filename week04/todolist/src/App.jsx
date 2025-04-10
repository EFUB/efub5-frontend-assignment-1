import React, { useState, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef
  }
`;

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [
      //{ id: 1, text: "투두리스트", done: false },
      //{ id: 2, text: "이펍 가기", done: false },
    ];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      
        <TodoHead todos={todos} /> {/* TodoHead 컴포넌트 사용 [3] */}
        
          <TodoList todos={todos} setTodos={setTodos} /> {/* TodoList 컴포넌트 사용 [3, 9] */}
          <TodoCreate todos={todos} setTodos={setTodos} /> {/* TodoCreate 컴포넌트 사용 [1, 3] */}
        
      
    </>
  );
}

export default App;
