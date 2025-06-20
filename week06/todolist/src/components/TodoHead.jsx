//TodoHead.jsx

import React, { useState, useMemo } from "react";
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
  padding-top: 35px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 0px;
  border-bottom: 1px solid #e9ecef;
`;

const TasksLeft = styled.div`
  color: #3d3b40;
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
  // const undoneTasks = todos.filter((todo) => !todo.done)  // 기존 할 일 개수 변경

  const undoneCount = useMemo(() => {
    return todos.filter(todo => !todo.done).length;
  }, [todos]);  // todos가 변경될 때만 다시 계산하도록 수정 

  return (
    <TodoHeadBlock>
      <div>
        <h1>{dateString}</h1>
        <div className="day">{dayName}</div>
        { <TasksLeft>할 일 {undoneCount}개 남음</TasksLeft> }
      </div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
