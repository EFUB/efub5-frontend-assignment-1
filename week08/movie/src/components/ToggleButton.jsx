import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../store/themeSlice';

const TogglePos = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 20px 40px 0 0;
`;

const ToggleContainer = styled.div`
  position: relative;
  width: 50px;
  height: 24px;
  border-radius: 30px;
  background-color: ${({ theme }) => (theme === 'light' ? 'black' : 'white')};
  transition: background-color 0.3s;
  cursor: pointer;
`;

const ToggleCircle = styled.div`
  position: absolute;
  top: 1px;
  left: ${({ theme }) => (theme === 'light' ? '27px' : '1px')};
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: rgb(255, 254, 255);
  box-shadow: 0 5px 4px rgba(0,0,0,0.5);
  transition: left 0.3s;
`;

function ToggleButton () {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  
  return (
    <TogglePos>
      <ToggleContainer theme={theme} onClick={() => dispatch(toggleTheme())}>
        <ToggleCircle theme={theme} />
      </ToggleContainer>
    </TogglePos>
  );
};

export default ToggleButton;