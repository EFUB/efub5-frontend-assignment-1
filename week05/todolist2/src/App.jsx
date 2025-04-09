import React, { useState, useRef, useEffect, useCallback} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import GlobalStyle from './components/GlobalStyle'; 

function App() {

  

const nextId = useRef(3);

const onCreate = useCallback((text) => { //새로운 할 일 만들 때 실행할 함수 
  const newTodo = {
    id: nextId.current,
    text, //사용자가 입력한 문자열 
    done:false,
  };
  setTodos((prev) => [...prev, newTodo]) //기존 배열 복사 후 새 항목 붙임 
  nextId.current += 1;
}, []);

const onRemove = useCallback((id) => {  //할일 삭제 함수 
  setTodos((prevTodos) => prevTodos.filter(todo=>todo.id !== id)); //삭제하려는 id 제외한 것만 남김 
}, []);

const onToggle = useCallback((id) => {  //할일 완료 토글 기능 함수 
  setTodos((prev) =>
    prev.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo  // 클릭한 항목의 done 값 반전 
    )
  );
}, []);

const onUpdate = useCallback((id, newText) => { //할일 수정 업데이트 함수 
  setTodos( (prev) =>
    prev.map(todo => 
      todo.id === id ? {...todo, text:newText} : todo  //해당 id를 가진 todo의 text만 바꿔줌 
    )
  );
}, []);

//로컬스토리지 저장 
const storedTodos = JSON.parse(localStorage.getItem('todos')) || []; //브라우저에 저장된 todo가 있으면 꺼내고 문자열을 배열로 바꿔줌 
const [todos, setTodos] = useState(storedTodos); //초기값으로 꺼낸 배열을 넣음 
useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos]) //할일이 변경될 때마다 문자열로 바꿔서 브라우저에 저장 

  return (
    <>
      <GlobalStyle />
      <TodoTemplate>
      <button onClick={handleTempChange}>테스트 버튼</button>
        <TodoHead todos={todos}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} onUpdate={onUpdate}/> 
        <TodoCreate onCreate={onCreate}/> 
      </TodoTemplate>
    </>
  )
}

export default App
