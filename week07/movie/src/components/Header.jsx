import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0px 2px;
  border-bottom: 1px solid lightgrey;
  height: 100px;
`;

const HeaderTitle = styled.p`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: white;
  padding-top: 3px;
`;

function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Movie Cinema</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;