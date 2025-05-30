import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  body {
    background-color: ${({ theme }) => theme.background}; 
    /*/props로 받은 theme.background 값을 꺼내 넣어줌/*/
    color: ${({ theme }) => theme.text};
    font-family: 'Pretendard', sans-serif;
    padding: 20px;
  }
`;

export default GlobalStyles;
