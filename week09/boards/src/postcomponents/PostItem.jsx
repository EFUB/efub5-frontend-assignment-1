// 글 목록 구성 컴포넌트
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
/*
const PostItemContainer = styled(Link)`
  width: 100%;
  height: 60px;
  padding: 10px;
  margin: 5px 2px;
  text-decoration: none;
  color: inherit;
  border: 1px solid #ddd;
  border-radius: 5px;

  &:hover {
    background-color: #f7f7f7;
  }
`;
*/
const PostItemContainer = styled(Link)`
  display: block;
  width: 100%;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 18px 16px;
  margin-bottom: 16px;
  font-size: 16px;
  color: #222;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  transition: box-shadow 0.15s;
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.08);
    background: #f8f8f8;
  }
`;

const PostItemTitle = styled.h3`
  font-size: 20px;
  font-weight: 500;
  padding-top: 3px;
  padding-bottom: 10px;
`;

function PostItem ({ postId, postTitle }) {
  return(
    <PostItemContainer to={`/post/${postId}`}>
      <PostItemTitle>{postTitle}</PostItemTitle>
    </PostItemContainer>
  );
}

export default PostItem;