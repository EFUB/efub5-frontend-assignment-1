import { useParams } from "react-router-dom";
import useNoteStore from "../store/noteStore";
import styled from "styled-components";

function NoteDetailPage() {
  const { date } = useParams();
  const note = useNoteStore((state) => state.getNoteByDate(date));

  return (
    <Wrapper>
      <DateTitle>{date}</DateTitle>
      <NoteContent>{note?.content || "작성된 내용이 없습니다."}</NoteContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  margin: 60px auto;
  padding: 32px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const DateTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #222;
  margin: 0;
`;

const NoteContent = styled.p`
  font-size: 1.1rem;
  color: #444;
  line-height: 1.6;
  white-space: pre-wrap; /* 줄바꿈 유지 */
  margin: 0;
`;


export default NoteDetailPage;
