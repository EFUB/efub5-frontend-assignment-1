import React from "react";
import { useDispatch, useSelector } from 'react-redux'; 
import { toggleTheme } from "../store/themeSlice";
import styled from "styled-components";


const ToggleBtn = styled.button`
    padding: 5px 10px;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};
    border-radius: 10px;
    font-size: 10px;
    cursor: pointer;
    margin: 10px;
    transition: all 0.3s ease;

    &:hover {
        opacity: 0.8;
    }
`;


function ThemeToggle (){
    //isDark: 현재 다크모드인지 true/false 값 가져와 저장 
    const isDark = useSelector((state) => state.theme.isDark)
    //useSelector: store에서 현재 상태 꺼내오는 함수 

    const dispatch = useDispatch(); // 명령 보낼 준비
    // useDispatch: 상태 바꾸라고 명령 보내는 함수 

    const handleClick = () => {
        dispatch(toggleTheme());
    }

    return (
        <ToggleBtn onClick={handleClick}>
            {isDark ? 'Light' : 'Dark'}
        </ToggleBtn>
    );
}

export default ThemeToggle;