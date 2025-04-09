import React, {useMemo} from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  margin-bottom: 2rem;

  h1 {
    margin: 0;
    font-size: 2rem;
    color: #343a40;
  }

  h2 {
    font-size: 1rem;
    color: #868e96;
    margin-top: 0.25rem;
  }
`;

function TodoHead({ todos }) {



  const today = new Date();
  const dateString = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  });
  

  const undoneTasks = useMemo(() => {      //todos가 바뀔 때만 계산 
    return todos.filter(todo => !todo.done);
  }, [todos]);
  

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <h2>Tasks left: {undoneTasks.length}</h2>
    </TodoHeadBlock>
  );
}

export default React.memo(TodoHead);
