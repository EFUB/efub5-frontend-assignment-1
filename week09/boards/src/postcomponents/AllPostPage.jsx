// 전체 글 목록 페이지
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axiosInstance from '../api/axiosInstance';
import PostItem from './PostItem';

function AllPostPage () {
  // 전체 게시글 목록 상태
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axiosInstance.get('/posts')
    .then(res => {
      setPosts(res.data);
    })
    .catch(err => {
      console.error(err);
      setPosts([]);
    });
  }, []);

  return(
    <>
      {posts.map(post => (
        <PostItem key={post.postId} postId={post.postId} postTitle={post.title} />
      ))}
    </>
  );
}

export default AllPostPage;