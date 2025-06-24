import { useState } from "react";
import { makeBoard } from "../api/board";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  height: 100vh;
  background-color: #ffffff;
  font-family: 'Segoe UI', sans-serif;
`;

const TitleBox = styled.input`
  width: 300px;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const TextBox = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
`;

const NoticeBox = styled.textarea`
  width: 300px;
  height: 80px;
  padding: 12px;
  margin-bottom: 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  resize: none;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

function CreateBoardPage() {

  const [boardTitle, setboardTitle] = useState('');
  const [boardText, setboardText] = useState('');
  const [boardNotice, setboardNotice] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async () => {
    const result = await makeBoard({
      title: boardTitle,
      description: boardText,
      notice: boardNotice,
    });

    const newBoard = {
      boardId: result.data.boardId,
      title: boardTitle,
      description: boardText,
      notice: boardNotice,
    };

    const existing = JSON.parse(localStorage.getItem("boards") || "[]");
    localStorage.setItem("boards", JSON.stringify([...existing, newBoard]));

    navigate(`/boards/${newBoard.boardId}`);
  };

  return (
    <CreateContainer>
      <TitleBox
        value={boardTitle}
        onChange={(e) => setboardTitle(e.target.value)}
        placeholder="게시판 제목"
      />
      <TextBox
        value={boardText}
        onChange={(e) => setboardText(e.target.value)}
        placeholder="게시판 설명"
      />
      
      <NoticeBox
        value={boardNotice}
        onChange={(e) => setboardNotice(e.target.value)}
        placeholder="게시판 공지"
      />
      <SubmitButton onClick={handleSubmit}>게시판 생성</SubmitButton>
    </CreateContainer>

  );
};

export default CreateBoardPage;
