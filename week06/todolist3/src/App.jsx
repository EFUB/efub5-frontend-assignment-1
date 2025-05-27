import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './components/GlobalStyle';
import NavBar from './components/NavBar';
import TodoPage from './pages/TodoPage';
import Clock from './pages/Clock';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/clock" element={<Clock />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
