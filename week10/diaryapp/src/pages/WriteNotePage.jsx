import { useState } from "react";
import useNoteStore from "../store/noteStore";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    gap: 16px;
  `;
  
  const Title = styled.h2`
    text-align: center;
    font-size: 1.8rem;
    width: 300px;
  `;
  
  const Input = styled.input`
    padding: 12px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 200px;
  `;
  
  const TextArea = styled.textarea`
    padding: 12px;
    height: 100px;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    resize: none;
    width: 300px;

  `;
  
  const Button = styled.button`
    padding: 10px;
    font-size: 15px;
    background-color: #378ff5;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  
    &:hover {
      background-color: #005fcc;
    }
  `;

function WriteNotePage() {
  const [noteDate, setNoteDate] = useState('');
  const [noteText, setNoteText] = useState('');

  const navigate = useNavigate();

  const addNote = useNoteStore((state) => state.addNote);

  const handleSubmit = () => {
    const cleanDate = noteDate.trim();
    addNote(cleanDate, noteText);
    navigate(`/detail/${cleanDate}`);
  };
  

  return (
    <Wrapper>
      <Title>오늘의 일기 쓰기</Title>
      <Input
        type="text"
        value={noteDate}
        onChange={(e) => setNoteDate(e.target.value)}
        placeholder="예: 2025-06-24"
      />
      <TextArea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="내용을 입력하세요."
      />
      <Button onClick={handleSubmit}>작성 완료</Button>
    </Wrapper>
  );
}



export default WriteNotePage;
