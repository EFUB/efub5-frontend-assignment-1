// TodoCreate.jsx
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import { MdAdd } from "react-icons/md";

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

function TodoCreate({ todos, setTodos }) {
  const [text, setText] = useState("");
  const [id, setId] = useState(Date.now());
  const newItem = { id: id, text: text, done: false };

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (text) {
        setId(Date.now());
        setTodos([...todos, newItem]);
      }
      setText("");
    },
    [todos, setTodos, text, setId, newItem]
  );

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <InsertFormPositioner>
      <InsertForm onSubmit={onSubmit}>
        <Input
          autoFocus
          onChange={handleChange}
          value={text}
          placeholder="할 일을 입력 후, Enter 를 누르세요"
        />
      </InsertForm>
    </InsertFormPositioner>
  );
}

export default React.memo(TodoCreate);