import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.main`
  max-width: 500px;
  margin: 4rem auto;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #333;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #4a90e2;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  font-weight: bold;
  color: ${(props) => (props.success ? "green" : "red")};
  text-align: center;
`;


  

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    nickname: "",
    university: "",
    studentId: "",
  });

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/members", formData);
      localStorage.setItem("ownerId", res.data.id);
      
      setIsSuccess(true);
      setMessage("✅ 회원가입 성공!");
      
      navigate("/");
    } catch (err) {
      setIsSuccess(false);
      setMessage("❌ 회원가입 실패!");
      console.error(err);
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          이메일
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          비밀번호
          <Input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          닉네임
          <Input
            type="text"
            name="nickname"
            value={formData.nickname}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          대학교
          <Input
            type="text"
            name="university"
            value={formData.university}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          학번
          <Input
            type="text"
            name="studentId"
            value={formData.studentId}
            onChange={handleChange}
            required
          />
        </Label>

        <Button type="submit">회원가입</Button>
      </Form>

      {message && <Message success={isSuccess}>{message}</Message>}
    </Container>
  );
}
