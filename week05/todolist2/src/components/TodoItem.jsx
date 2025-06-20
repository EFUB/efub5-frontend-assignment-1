//
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";

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

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 7px 0;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;

const CheckCircle = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "done",
})`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid black;
      color: black;
    `}
`;


const Text = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "done",
})`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
`;


function TodoItem({ id, text, done, onToggle, onRemove, onEdit }) {
  const[isEditing, setIsEditing] = useState(false);  // 수정하고 있는 상태
  const [editText, setEditText] = useState(text);  // 수정할 text
  /*
  const onToggle = () => {
    setTodos((prevTodo) => prevTodo.map((todo) => 
      todo.id === id ? {...todo, done: !todo.done } : todo
    ));
  };

  const onRemove = () => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  const onEdit = () => {  // 수정 중
    setEditText(text);  // 현재 텍스트로 초기화
    setIsEditing(true);
  };
  */
  const onSave = () => {
    if (editText.trim() ===""){
      alert("내용을 입력하세요.");
      return;
    }
    onEdit(id, editText);
    setIsEditing(false);
  };

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>{ done && <MdDone /> }</CheckCircle>
      {isEditing ? (
        <input 
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onBlur={onSave}
          autoFocus
        />
      ) : (
        <Text done={done}>{text}</Text>
      )}
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
      {!isEditing && <button onClick={onEdit}>수정</button>}
      {isEditing && <button onClick={onSave}>저장</button>}
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);
