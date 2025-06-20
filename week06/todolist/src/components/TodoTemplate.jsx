import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  font-family: "Winky Sans", Jua;
  width: 600px;
  height: 600px;
  position: center;
  background: #ffe2e2;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
