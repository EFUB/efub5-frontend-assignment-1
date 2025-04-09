import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 480px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  padding: 2rem;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;
