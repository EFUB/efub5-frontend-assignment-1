//App.js
import React, { useState } from "react";
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
const TODO_LIST=[
  {id:1,
    text:"투두리스트",
    done:false},
  {
    id:2,
    text:"이펍 가기",
    done:false,
  },
];

function App() {

  const [todos,setTodos]=useState(TODO_LIST);


  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead todos={todos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
        <TodoCreate todos={todos} setTodos={setTodos}/>
      </TodoTemplate>
    </>
  );
}

export default App;
