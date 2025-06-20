import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import useNoteStore from '../noteStore';

const PageContainer = styled.div`
  max-width: 768px;
  margin: 100px auto 40px;
  padding: 0 16px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 15px;
`;

const AddButton = styled(Link)`
  padding: 8px 16px;
  font-size: 1rem;
  background-color: #212121;
  color: white;
  text-decoration: none;
  border-radius: 90px;
  font-weight: bold;
  &:hover {
    background-color: #4e6688;
  }
`;

const MemoList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
`;

const MemoCard = styled(Link)`
  display: block;
  padding: 16px;
  background-color: #f8f9fa;
  border-radius: 12px;
  text-decoration: none;
  color: #222;
  border: 1px solid #e2e8f0;
  transition: box-shadow 0.2s ease;
  height: 150px; /* 원하는 높이 조절 가능 */

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  }

  overflow: hidden;
`;

const MemoTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 8px;
`;

const MemoContent = styled.p`
  font-size: 0.95rem;
  color: #555;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function Home() {
  const notes = useNoteStore((state) => state.notes);

  return (
    <PageContainer>
      <Header>
        <Title>📝 당신의 생각을 적어보세요</Title>
        <AddButton to="/add">+</AddButton>
      </Header>

      {notes.length === 0 ? (
        <p>작성된 메모가 없습니다 🥲</p>
      ) : (
        <MemoList>
          {notes.map((note) => (
            <MemoCard key={note.id} to={`/edit/${note.id}`}>
              <MemoTitle>{note.title}</MemoTitle>
              <MemoContent>{note.content}</MemoContent>
            </MemoCard>
          ))}
        </MemoList>
      )}
    </PageContainer>
  );
}

export default Home;
