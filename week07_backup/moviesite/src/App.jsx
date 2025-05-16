import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <BrowserRouter>
    <>
    <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
      </>
    </BrowserRouter>
  );
}


export default App;