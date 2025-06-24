import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BoardListPage from './pages/BoardListPage';
import BoardDetailPage from './pages/BoardDetailPage';
import PostDetailPage from './pages/PostDetailPage';
import CreatePostPage from './pages/CreatePostPage';
import EditPostPage from './pages/EditPostPage';
import EditBoardPage from './pages/EditBoardPage';
import CreateBoardPage from './pages/CreateBoardPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/boards" element={<BoardListPage />} />
        <Route path="/boards/:boardId" element={<BoardDetailPage />} />
        <Route path="/posts/:postId" element={<PostDetailPage />} />
        <Route path="boards/:boardId/create-post" element={<CreatePostPage />} />
        <Route path="/create-board" element={<CreateBoardPage />} />
        <Route path="/posts/edit/:postId" element={<EditPostPage />} />
        <Route path="/boards/edit/:boardId" element={<EditBoardPage />} />
        <Route path="/" element={<MainPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
