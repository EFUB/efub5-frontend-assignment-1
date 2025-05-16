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
  
nav.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin: 1rem auto;
  max-width: 720px;
}

.navbar-title {
  font-size: 1.4rem;
  font-weight: bold;
  color: #4d4d4d;
}

.navbar-links {
  display: flex;
  gap: 1.2rem;
}

.nav-link {
  color: #4d4d4d;
  text-decoration: none;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s;
}

.nav-link:hover {
  background-color: #fef3c7; /* 호버 시 연노랑 강조 */
  color: #1e3a8a;
}

.nav-link.active {
  background-color: #fde68a; /* 활성 상태일 때 연노랑 */
  color: #1e3a8a;
  font-weight: 600;
}

  
`;

export default GlobalStyle;
