import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import GlobalStyles from './GlobalStyles';
import { useSelector } from "react-redux"
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import ThemeToggle from './components/ThemeToggle';


function App() {
  const isDark = useSelector((state) => state.theme.isDark); // 상태 가져오기
  return (
    <BrowserRouter>
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}> 
    <GlobalStyles/>
    <ThemeToggle/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}


export default App;