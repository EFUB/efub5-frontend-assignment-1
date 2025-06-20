import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

// 화면 전체 중앙 정렬
const CenterScreen = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f9f9f9; /* 필요시 배경색 */
`;

// 네비게이션과 콘텐츠를 감싸는 실제 박스
const Layout = styled.div`
  width: 100%;
  max-width: 800px;
  min-width: 320px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
`;

const NavItem = styled(Link)`
  margin-right: 15px;
  text-decoration: none;
  color: #333;
  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <CenterScreen>
      <Layout>
        <Nav>
          <div>
            <NavItem to="/">회원가입</NavItem>
            <NavItem to="/allpost">전체 글</NavItem>
          </div>
        </Nav>
        <Outlet />
      </Layout>
    </CenterScreen>
  );
}

export default App;
