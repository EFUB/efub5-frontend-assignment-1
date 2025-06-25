import useNoteStore from "../store/noteStore";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function NoteListPage() {
  const notes = useNoteStore((state) => state.notes);
  const deleteNote = useNoteStore((state) => state.deleteNote);

  return (
    <Wrapper>
      <Title>한 줄 일기 목록</Title>

      {notes.length === 0 ? (
        <Empty>작성된 일기가 없습니다.</Empty>
      ) : (
        <NoteList>
          {notes.map((note) => (
            <NoteItem key={note.date}>
              <StyledLink to={`/detail/${note.date}`}>
                {note.date}
              </StyledLink>
              <DeleteButton onClick={() => deleteNote(note.date)}>삭제</DeleteButton>
            </NoteItem>
          ))}
        </NoteList>
      )}

      <WriteLink to="/write">+ 새 일기 작성하기</WriteLink>
    </Wrapper>
  );
}

export default NoteListPage;

// styled-components

const Wrapper = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`;

const NoteList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const NoteItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 500;
  color: #333;

  &:hover {
    text-decoration: underline;
  }
`;

const DeleteButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: #d9363e;
  }
`;

const WriteLink = styled(Link)`
  align-self: center;
  font-weight: bold;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  background-color: #378ff5;
  color: white;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    background-color: #005fcc;
  }
`;

const Empty = styled.p`
  text-align: center;
  color: #888;
`;
