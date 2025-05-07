// TodoHead.jsx
import React, { useMemo } from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  h1 {
    margin: 0;
    font-size: 36px;
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
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
`;

function TodoHead({ todos }) {
  const today = new Date();
  const dateString = today.toLocaleString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleString("ko-KR", { weekday: "long" });
  const undoneTasks = useMemo(() => todos.filter((todo) => !todo.done), [todos]);

  return (
    <TodoHeadBlock>
      <h1>오늘의 할 일</h1>
      <div className="day">{dateString}</div>
      <div className="day">{dayName}</div>
      <TasksLeft>할 일 {undoneTasks.length}개 남음</TasksLeft>
    </TodoHeadBlock>
  );
}

export default React.memo(TodoHead);