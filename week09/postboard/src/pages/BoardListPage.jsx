import { useState, useEffect } from "react";
import { deleteBoard } from "../api/board";
import { Link } from 'react-router-dom';
import BoardItem from "../components/BoardItem";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  min-height: 100vh;
  background-color: #ffffff;
`;

const BoardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 600px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const CreateButton = styled(Link)`
  margin-top: 40px;
  padding: 12px 24px;
  background-color: #4a90e2;
  color: white;
  font-size: 16px;
  text-decoration: none;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

function BoardListPage(){
    const [boards, setBoards] = useState([]);
     
    useEffect(() => {
        const storedBoards = JSON.parse(localStorage.getItem("boards") || "[]");
        setBoards(storedBoards);
    }, []);

    const handleDelete = async (id) => {
        await deleteBoard(id);
        const updatedBoards = boards.filter((b) => b.boardId !== id);
        setBoards(updatedBoards);
        localStorage.setItem("boards", JSON.stringify(updatedBoards));
    };

    return (
        <ListContainer>
            <h2>전체 게시판 목록</h2>
            <BoardList>
                {boards.map((board) => (
                    <StyledLink to={`/boards/${board.boardId}`} key={board.boardId}>
                        <BoardItem
                            board={board}
                            onDelete={handleDelete}
                        />
                    </StyledLink>
                ))}
            </BoardList>
            <CreateButton to="/create-board">게시판 생성</CreateButton>
        </ListContainer>
    );
};

export default BoardListPage;
