import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #f5dd60; 
    font-style: Arial;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    padding: 0.5rem 1.5rem;
    border-radius: 12px;
    font-weight: bold;
  }

  input {
    font-family: inherit;
    padding: 1rem;
    border: 1px solid #ced4da;
    border-radius: 8px;
    width: 100%;
    margin-top: 1rem;
  }
`;

export default GlobalStyle;
