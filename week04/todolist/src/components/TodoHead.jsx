import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
    color: rgb(19, 63, 108);
  }
  .date {
    margin: 0;
    font-size: 30px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
`;

const TasksLeft = styled.div`
  color: rgb(56, 136, 217);
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

const ClearButton = styled.button`
  font-size: 16px;
  margin-top: 40px;
  font-weight: regular;
  background: rgb(56, 136, 217);
  padding: 6px 12px;

  &:hover {
    background: rgb(255, 170, 217);
  }
`;
//hover: 마우스 올렸을 때
//& 작성중인 컴포넌트 자신을 가리키는 표현임

function TodoHead({ todos, setTodos }) {
  const today = new Date();

  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  const undoneTasks = todos.filter((todo) => !todo.done);
  //done 값이 fasle인 것만 필터링해서 가져옴.

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));
  }; //완료 항목 한 번에 삭제하기 => done이 false인 것만 남기기

  return (
    <TodoHeadBlock>
      <h1> To Do List🔥</h1>
      <h1 className="date">{dateString}</h1>
      <div className="day">{dayName}</div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
        <ClearButton onClick={handleClearCompleted}>
          완료 항목 전체 삭제
        </ClearButton>
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
