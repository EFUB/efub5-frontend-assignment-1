import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
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
  background-color: #3182ce;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #2b6cb0;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #e53e3e;
  margin-left: 12px;

  &:hover {
    background-color: #c53030;
  }
`;

function EditMemoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const notes = useNoteStore((state) => state.notes);
  const editNote = useNoteStore((state) => state.editNote);
  const deleteNote = useNoteStore((state) => state.deleteNote);

  const note = useMemo(() => notes.find((n) => n.id === id), [notes, id]);
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [isDeleted, setIsDeleted] = useState(false); // ✅ 삭제 플래그 추가

  useEffect(() => {
    if (!note && notes.length > 0 && !isDeleted) {
      alert('메모를 찾을 수 없습니다.');
      navigate('/');
    }
  }, [note, notes.length, navigate, isDeleted]); // ✅ isDeleted도 dependency에 추가

  const handleUpdate = () => {
    if (!title.trim() || !content.trim()) return alert('제목과 내용을 입력해주세요!');
    editNote(id, title, content);
    navigate('/');
  };

  const handleDelete = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteNote(id);
      setIsDeleted(true);        // ✅ 삭제 플래그 설정
      navigate('/');
    }
  };

  return (
    <Container>
      <Title>메모 수정</Title>
      <Input value={title} onChange={(e) => setTitle(e.target.value)} />
      <TextArea value={content} onChange={(e) => setContent(e.target.value)} />
      <Button onClick={handleUpdate}>수정하기</Button>
      <DeleteButton onClick={handleDelete}>삭제하기</DeleteButton>
    </Container>
  );
}

export default EditMemoPage;