//TodoCreate.jsx
import React, { useState, useRef } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const InsertFormPositioner = styled.div`
  width: 100%;
`;

const InsertForm = styled.form`
  background: black;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid grey;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid black;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`;

function TodoCreate({ todos, setTodos}) {
  const [text, setText] = useState("");
  const [id, setId] = useState(Date.now())
  const newItem = {id: `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`, text: text, done: false};

  const inputRef = useRef(null); // ref 생성

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      const newTodo = {
        id: `${Date.now()}-${Math.random()}`,
        text,
        done: false,
      };
      const updatedTodos = [...todos, newTodo];
      setTodos(updatedTodos);
      setText("");
      
      if (inputRef.current) {
        inputRef.current.blur();
      }
    }
  };
  
  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <InsertFormPositioner>
        <InsertForm onSubmit={onSubmit}>
          <Input
            ref={inputRef}
            onChange={handleChange}
            value={text}
            placeholder="할 일을 입력 후, Enter 를 누르세요"
          />
        </InsertForm>
      </InsertFormPositioner>
    </>
  );
}

export default React.memo(TodoCreate);
