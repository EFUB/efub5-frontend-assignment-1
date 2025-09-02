import NoteListPage from "./pages/NoteListPage";
import WriteNotePage from "./pages/WriteNotePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail/:noteDate" element={<NoteDetailPage/>} />
        <Route path="/" element={<NoteListPage/>} />
        <Route path="/write" element={<WriteNotePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
