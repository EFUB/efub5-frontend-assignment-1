import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import SignUpPage from './components/SignUpPage';
import AllPostPage from './postcomponents/AllPostPage';
import PostDetailPage from './postcomponents/PostDetailPage';
import BoardPage from './boardcomponents/BoardPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SignUpPage />} />
          <Route path="/allpost" element={<AllPostPage />} />
          <Route path="/post/:postId" element={<PostDetailPage />} />
          <Route path="/boards/:boardId" element={<BoardPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
