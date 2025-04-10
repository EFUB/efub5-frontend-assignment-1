//App.js
import React, { useState, useEffect, useRef } from "react";
import styled, { createGlobalStyle } from "styled-components";
import TodoTemplate from "./components/TodoTemplate";
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  body {
    background: #e9ecef;
  }
  
  * {
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 2rem 1rem;
  background: #e9ecef;
`;

function App() {
  const[todos, setTodos] = useState([]);
  const isInitialMount = useRef(true); // 첫 마운트인지 체크

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
        const parsed = JSON.parse(storedTodos);
        setTodos(parsed);
    }
  }, []);  

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return; // 첫 마운트에 저장하지 않음
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TodoTemplate>
          <TodoHead todos={todos} />
          <TodoList todos={todos} setTodos={setTodos} />
          <TodoCreate todos={todos} setTodos={setTodos} />
        </TodoTemplate>
      </Wrapper>
    </>
  );
}

export default App;
