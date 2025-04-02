import React, {useState} from 'react';
import styled from 'styled-components';


 const FormWrapper = styled.form`
    gap: 0.5rem;
    margin-top: 1rem;
    display: flex;
    align-items: center;
  `;

  const InputField = styled.input`
  height: 48px;
  padding: 0 1rem;
  border: 1px solid #ced4da;
  border-radius: 12px;
  font-size: 1rem;
`;

const AddButton = styled.button`
  background-color: #4c6ef5;
  color: white;
  font-weight: bold;
  padding: 0 1.5rem;
  height: 48px;
  border-radius: 12px;
  font-size: 1rem;
  transition: background 0.2s;
  &:hover {
    background-color: #3b5bdb;
  }
`;
function TodoCreate({onCreate}) {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value); //지금 입력한 텍스트를 setValue로 저장 
    }
    // input이 바뀔 때마다 onChange 실행 → value 상태가 바뀜 → input이 다시 그 값으로 갱신됨
    
    
    const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 막기!
        onCreate(value); //App.jsx에서 만든 함수 호출
        setValue(''); // input 비우기
      };

    return(
        <FormWrapper onSubmit={onSubmit}>
            <InputField
            value={value}
            onChange={onChange}
            placeholder="Enter your task"
            />
            <AddButton type="submit">Add</AddButton>
        </FormWrapper>
    );
  }
  

export default TodoCreate;