import { Link } from "react-router-dom";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff;
`;

const Welcome = styled.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`;

const MainLink = styled(Link)`
  background-color: #4a90e2;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

function MainPage() {
  return (
    <MainContainer>
      <Welcome>EFUB 게시판에 오신 걸 환영합니다!</Welcome>
      <MainLink to="/boards">전체 게시판 조회</MainLink>
    </MainContainer>
  );
}

export default MainPage;
