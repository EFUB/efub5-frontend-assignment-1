import React, { useState } from "react";
import styled from 'styled-components';


function TodoItem({id, text, done, onRemove, onToggle, onUpdate}) {
    const [isEditing, setIsEditing] = useState(false); //수정 중인지
    const [editText, setEditText] = useState(text); // 사용자 입력 내용 실시간 저장
    
    const handleEdit = () => setIsEditing(true); //수정중 상태로 바뀜

    const handleChange = (e) => {
        setEditText(e.target.value) //e.target.value: input에 입력된 현재 문자열
        // 입력할 때마다 상태 업데이트 
    }
    const handleSubmit = (e) => {
        e.preventDefault(); //새로고침 방지 
        onUpdate(id, editText) //App.jsx의 상태 업데이트 함수 호출, 이 id의 내용을 editText로 수정
        setIsEditing(false); //수정 모드 종료 
    }
    
    const DoneButton = styled.span`
    `;
    const ItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #e9ecef;
    `;


    const TextContainer = styled.div`
    text-align: left;
    margin-left: 5px;
    `;

    const ButtonGroup = styled.div`
    display: flex;
    gap: 3px;
    `;

    const DeleteButton = styled.button`
    background: #fa5252;
    color: white;
    padding: 0.3rem 0.9rem;
    border-radius: 10px;
    font-weight: bold;
    transition: background 0.2s;
    &:hover {
        background: #e03131;
    }
    `;

    const EditButton = styled.button`
    background: #adb5bd;
    color: white;
    padding: 0.3rem 0.9rem;
    border-radius: 10px;
    font-weight: bold;
    margin-right: 0.5rem;

    margin-left: 0.5rem;
    transition: background 0.2s;
    &:hover {
        background: #868e96;
    }
    `;


    return (
        <div>
          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <input value={editText} onChange={handleChange} autoFocus />
              <EditButton type="submit">Save</EditButton>
            </form>
          ) : (
            <ItemContainer>
              <TextContainer>{text}</TextContainer>
              <ButtonGroup>
                <DoneButton onClick={() => onToggle(id)}>
                  {done ? '✅' : '⬜️'}
                </DoneButton>
                <EditButton onClick={handleEdit}>Edit</EditButton>
                <DeleteButton onClick={() => onRemove(id)}>Delete</DeleteButton>
              </ButtonGroup>
            </ItemContainer>
          )}
        </div>
      );
    }


export default TodoItem;