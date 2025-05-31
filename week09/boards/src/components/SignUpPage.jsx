// 회원가입 페이지
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; // 세로 중앙
  width: 100vw;
  background: #fff;
`;

const SignUpContainer = styled.div`
  width: 28%;
  min-width: 320px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 0 16px rgba(0,0,0,0.05);
`;

const SignupTitle = styled.h1`
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const SignupInfoContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SignUpBtn = styled.button`
  padding: 12px;
  background-color: #4caf50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 12px;
`;

function SignUpPage () {
  const navigate = useNavigate();

  // 서버에 전달할 회원 정보 상태 
  const [memberInfo, setMemberInfo] = useState({
    email: "",
    password: "",
    nickname: "",
    university: "",
    studentId: "",
  });

  // 입력창 이벤트 핸들러
  const handleInputChange = (e) => {
    const { name, value } = (e).target;
    setMemberInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/members", memberInfo);
      const memberId = response.data.memberId;
      localStorage.setItem('memberId', memberId);
      alert(`회원가입 성공!`);
      navigate('/allpost');
    } catch (err) {
      alert('회원가입 실패');
      console.error(err);
    }
  };

  return (
  <Wrapper>
    <SignUpContainer>
      <SignupTitle>회원가입</SignupTitle>
      <SignupInfoContainer onSubmit={handleSignUp}>
        <Input name="nickname" onChange={handleInputChange} value={memberInfo.nickname} placeholder="이름" />
        <Input name="email" onChange={handleInputChange} value={memberInfo.email} placeholder="이메일" />
        <Input name="password" type="password" onChange={handleInputChange} value={memberInfo.password} placeholder="비밀번호" />
        <Input name="university" onChange={handleInputChange} value={memberInfo.university} placeholder="학교" />
        <Input name="studentId" type="text" onChange={handleInputChange} value={memberInfo.studentId} placeholder="학번" />
        <SignUpBtn type="submit">회원가입</SignUpBtn>
      </SignupInfoContainer>
    </SignUpContainer>
  </Wrapper>
);
}

export default SignUpPage;