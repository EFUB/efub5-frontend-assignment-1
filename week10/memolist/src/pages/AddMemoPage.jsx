import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useNoteStore from '../noteStore';

const Container = styled.div`
  max-width: 720px;
  margin: 40px auto;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 24px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 16px;
  background-color: #38a169;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2f855a;
  }
`;

function AddMemoPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const addNote = useNoteStore((state) => state.addNote);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      return alert('제목과 내용을 입력해주세요!');
    }

    addNote(title, content);
    navigate('/');
  };

  return(
    <>
      <Container>
        <Title>📝 새 메모 작성</Title>
        <Input
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextArea
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button onClick={handleSubmit}>저장하기</Button>
    </Container>
    </>
  );
}

export default AddMemoPage;