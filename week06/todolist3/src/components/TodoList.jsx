import TodoItem from "./TodoItem";
import React from "react";

function TodoList({todos, onRemove, onToggle, onUpdate}) {
    return <div>
        {todos.map(todo => (  //todo 배열의 각 todo 객체로 
            <TodoItem         //TodoItem 컴포넌트를 하나씩 만든다 
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}  
            onRemove={onRemove}
            onToggle={onToggle}
            onUpdate={onUpdate}
            />
        ))}
    </div>;
  }
  

export default React.memo(TodoList);